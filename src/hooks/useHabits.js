import { useState, useEffect } from "react";
import { api } from "../api/api";

export function useHabits() {
  const [habits, setHabits] = useState([]);
  const [suggestedHabits, setSuggestedHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([api.get("/habits"), api.get("/suggestedHabits")])
      .then(([habitsRes, suggestedRes]) => {
        setHabits(habitsRes.data);
        setSuggestedHabits(suggestedRes.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const addHabit = (newHabit) => {
    setHabits((prev) => [...prev, { ...newHabit, id: Date.now() }]);
  };

  const updateStreak = (habit, action) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === habit.id
          ? {
              ...h,
              streak:
                action === "increase"
                  ? (h.streak || 0) + 1
                  : Math.max(0, (h.streak || 0) - 1),
            }
          : h
      )
    );
  };

  return { habits, suggestedHabits, loading, error, addHabit, updateStreak };
}
