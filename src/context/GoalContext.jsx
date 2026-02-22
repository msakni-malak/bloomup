import { createContext, useContext, useState } from "react";

const GoalContext = createContext();

export function GoalProvider({ children }) {
  const [goals, setGoals] = useState([]);

  const addGoal = (newGoal) => {
    setGoals(prev => [...prev, { ...newGoal, id: Date.now() }]);
  };

  const deleteGoal = (id) => {
    setGoals(prev => prev.filter(g => g.id !== id));
  };

  const updateGoalTasks = (goalId, newTasks) => {
    setGoals(prev => prev.map(g =>
      g.id === goalId ? { ...g, tasks: newTasks } : g
    ));
  };

  return (
    <GoalContext.Provider value={{ goals, setGoals, addGoal, deleteGoal, updateGoalTasks }}>
      {children}
    </GoalContext.Provider>
  );
}

export function useGoalContext() {
  return useContext(GoalContext);
}