import { useState } from "react";
import SideBar from "../components/SideBar";
import GoalForm from "../components/GoalForm";
import GoalCard from "../components/GoalCard";
import GoalDetail from "../components/GoalDetail";
import { useGoals } from "../hooks/useGoals";
const Goals = () => {
  const { goals, loading, error, addGoal, deleteGoal, updateGoalTasks } = useGoals();
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [showForm, setShowForm] = useState(false);
  if (loading) return (
    <div className="flex flex-row min-h-screen bg-[#EFE8CE]">
      <SideBar />
      <div className="flex-1 flex items-center justify-center">
        <p className="text-[#7A8F4D] text-xl font-bold animate-pulse">Growing your garden... 🌱</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="flex flex-row min-h-screen bg-[#EFE8CE]">
      <SideBar />
      <div className="flex-1 flex items-center justify-center">
        <p className="text-[#BB8588] text-xl font-bold">Something went wrong 🍂</p>
      </div>
    </div>
  );
  return (
    <div className="flex flex-row min-h-screen bg-[#EFE8CE]">
      <SideBar />
  
      {selectedGoal ? (
        <GoalDetail
          goal={goals.find(g => g.id === selectedGoal.id) || selectedGoal}
          onBack={() => setSelectedGoal(null)}
          onDelete={(id) => { deleteGoal(id); setSelectedGoal(null); }}
          onUpdateTasks={updateGoalTasks}
        />
      ) : (
        <div className="flex-1 p-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-title font-bold text-[#4F5D2F]">Goals 🌼</h1>
              <p className="paragraph mt-1">Every destination starts with a single step.</p>
            </div>
            <button onClick={() => setShowForm(true)} className="px-6 py-3 bg-[#4F5D2F] text-[#EFEBCE] rounded-2xl font-bold hover:bg-[#3a4422] transition-all shadow-md">
              + New Goal
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {goals.map(goal => (
              <GoalCard key={goal.id} goal={goal} onView={setSelectedGoal} />
            ))}
          </div>
          {goals.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-6 py-24">
              <span className="text-7xl">🌱</span>
              <h2 className="font-title text-3xl font-bold text-[#4F5D2F]">Your garden is empty</h2>
              <p className="paragraph text-center max-w-sm">Plant your first goal and watch it bloom.</p>
              <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#4F5D2F] text-[#EFEBCE] rounded-2xl font-bold hover:bg-[#3a4422] transition-all shadow-md">
                 Plant Your First Goal
              </button>
            </div>
          )}
        </div>
      )}
  
      {showForm && (
        <GoalForm onClose={() => setShowForm(false)} onSave={addGoal} />
      )}
    </div>
  );
};

export default Goals;
