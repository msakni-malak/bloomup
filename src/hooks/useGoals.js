import { useGoalContext } from "../context/GoalContext";

export function useGoals() {
  
  const { goals, addGoal, deleteGoal, updateGoalTasks, loading, error } = useGoalContext();

  return { goals, loading, error, addGoal, deleteGoal, updateGoalTasks };
}