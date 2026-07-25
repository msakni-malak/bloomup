import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../api/api";
import { useUser } from "./UserContext";

const GoalContext = createContext();

export function GoalProvider({ children }) {
  const { user } = useUser();
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      setGoals([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    api
      .get(`/goals?userId=${user.id}`)
      .then((res) => setGoals(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [user]);

  const addGoal = (newGoal) => {
    api.post("/goals", { ...newGoal, userId: user.id })
      .then((res) => {
        setGoals(prev => [...prev, res.data]);
      })
      .catch((err) => setError(err));
  };

  const deleteGoal = (id) => {
    api.delete(`/goals/${id}`)
      .then(() => {
        setGoals(prev => prev.filter(g => g.id !== id));
      })
      .catch((err) => setError(err));
  };

  const updateGoalTasks = (goalId, newTasks) => {
    api.patch(`/goals/${goalId}`, { tasks: newTasks })
      .then(() => {
        setGoals(prev => prev.map(g =>
          g.id === goalId ? { ...g, tasks: newTasks } : g
        ));
      })
      .catch((err) => setError(err));
  };

  return (
    <GoalContext.Provider value={{ goals, setGoals, addGoal, deleteGoal, updateGoalTasks, loading, error }}>
      {children}
    </GoalContext.Provider>
  );
}

export function useGoalContext() {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error('useGoalContext must be used within GoalProvider');
  }
  return context;
}