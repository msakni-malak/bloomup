import { useHabitContext } from "../context/HabitContext";

export function useHabits() {
  
  const { habits, suggestedHabits, addHabit, checkIn, deleteHabit, loading, error } = useHabitContext();

  return { habits, suggestedHabits, loading, error, addHabit, checkIn, deleteHabit };
}