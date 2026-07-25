import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../api/api";
import { useUser } from "./UserContext";

const HabitContext = createContext();

export function HabitProvider({ children }) {

    const { user } = useUser();
    const [habits, setHabits] = useState([]);
    const [suggestedHabits, setSuggestedHabits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) {
            setHabits([]);
            setLoading(false);
            return;
        }
        Promise.all([api.get(`/habits?userId=${user.id}`), api.get("/suggestedHabits")])
          .then(([habitsRes, suggestedRes]) => {
            setHabits(habitsRes.data);
            setSuggestedHabits(suggestedRes.data);
          })
          .catch((err) => setError(err))
          .finally(() => setLoading(false));
      }, [user]);

    const addHabit = (newHabit) => {
        api.post("/habits", { ...newHabit, userId: user.id})
          .then((res) => {
            setHabits(prev => [...prev, res.data]);
          })
          .catch((err) => setError(err));
    };

    const checkIn = (habit) => {
        const today = new Date().toISOString().slice(0, 10);
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

        if (habit.lastCheckIn === today) {
            // deja coche aujourd'hui -> on annule, on restaure l'etat d'avant
            api.patch(`/habits/${habit.id}`, {
                streak: habit.previousStreak ?? 0,
                lastCheckIn: habit.previousLastCheckIn ?? null,
            })
                .then(() => {
                    setHabits((prev) => prev.map((h) =>
                        h.id === habit.id
                            ? { ...h, streak: habit.previousStreak ?? 0, lastCheckIn: habit.previousLastCheckIn ?? null }
                            : h
                    ));
                })
                .catch((err) => setError(err));
            return;
        }

        const newStreak = habit.lastCheckIn === yesterday
            ? (habit.streak || 0) + 1
            : 1;

        api.patch(`/habits/${habit.id}`, {
            streak: newStreak,
            lastCheckIn: today,
            previousStreak: habit.streak || 0,
            previousLastCheckIn: habit.lastCheckIn ?? null,
        })
            .then(() => {
                setHabits((prev) => prev.map((h) =>
                    h.id === habit.id
                        ? { ...h, streak: newStreak, lastCheckIn: today, previousStreak: habit.streak || 0, previousLastCheckIn: habit.lastCheckIn ?? null }
                        : h
                ));
            })
            .catch((err) => setError(err));
    };
    const deleteHabit = (id) => {
        api.delete(`/habits/${id}`)
            .then(() => {
                setHabits(prev => prev.filter(h => h.id !== id));
            })
            .catch((err) => setError(err));
    };
        
    return (
        <HabitContext.Provider value={{ habits, suggestedHabits, setHabits, setSuggestedHabits, addHabit, checkIn, deleteHabit, loading, error }}>
            {children}
        </HabitContext.Provider>
    );
}
export function useHabitContext() {
    const context = useContext(HabitContext);
    if (!context) {
        throw new Error('useHabitContext must be used within HabitProvider');
    }
    return context;
}