import { useState, useEffect } from "react";
import { useGoalContext } from "../context/GoalContext";
import { api } from "../api/api";

export function useGoals() {
  const { goals, setGoals, addGoal, deleteGoal, updateGoalTasks } =
    useGoalContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/goals")
      .then((res) => setGoals(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { goals, loading, error, addGoal, deleteGoal, updateGoalTasks };
}
