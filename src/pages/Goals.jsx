import { useState } from "react";
import MainLayout from "../components/MainLayout";
import GoalForm from "../components/GoalForm";
import GoalCard from "../components/GoalCard";
import GoalDetail from "../components/GoalDetail";
import { useGoals } from "../hooks/useGoals";
import cardLogo1 from "../assets/cardLogo1.svg";
import cardLogo4 from "../assets/cardLogo4.svg";

const Goals = () => {
  const { goals, loading, error, addGoal, deleteGoal, updateGoalTasks } = useGoals();
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getProgress = (goal) => {
    const tasks = goal.tasks || [];
    if (tasks.length === 0) return 0;
    return Math.round(
      (tasks.filter((t) => t.done).length / tasks.length) * 100
    );
  };

  const activeGoals = goals
    .filter((g) => getProgress(g) < 100)
    .sort((a, b) => getProgress(a) - getProgress(b));

  const bloomedGoals = goals.filter((g) => getProgress(g) === 100);

  if (loading)
    return (
      <MainLayout>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[#7A8F4D] text-xl font-bold animate-pulse">
            Growing your garden... 🌱
          </p>
        </div>
      </MainLayout>
    );

  if (error)
    return (
      <MainLayout>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[#BB8588] text-xl font-bold">
            Something went wrong 🍂
          </p>
        </div>
      </MainLayout>
    );

  return (
    <MainLayout noPadding={!!selectedGoal}>
      {selectedGoal ? (
        <GoalDetail
          goal={goals.find((g) => g.id === selectedGoal.id) || selectedGoal}
          onBack={() => setSelectedGoal(null)}
          onDelete={(id) => {
            deleteGoal(id);
            setSelectedGoal(null);
          }}
          onUpdateTasks={updateGoalTasks}
        />
      ) : (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-5xl font-title font-bold text-[#4F5D2F]">
                  Goals
                </h1>
              <p className="paragraph mt-1">
                Every destination starts with a single step.
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="button-2"
            >
              + New Goal
            </button>
          </div>

          {activeGoals.length > 0 && (
            <div className="mb-10">
              <h2 className="font-title text-2xl font-bold text-[#4F5D2F] mb-5 flex items-center gap-2">
                <img
                  src={cardLogo1}
                  alt="Goal Logo"
                  className="w-10 h-10"
                /> Growing Goals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {activeGoals.map((goal) => (
                  <GoalCard
                    key={goal.id}
                    goal={goal}
                    onView={setSelectedGoal}
                  />
                ))}
              </div>
            </div>
          )}

          {activeGoals.length > 0 && bloomedGoals.length > 0 && (
            <div className="border-t border-[#D7CE93]/50 my-10" />
          )}

          {bloomedGoals.length > 0 && (
            <div>
              <h2 className="font-title text-2xl font-bold text-[#4F5D2F] mb-5 flex items-center gap-2">
                <img
                  src={cardLogo4}
                  alt="Goal Logo"
                  className="w-10 h-10"
                /> Bloomed Goals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {bloomedGoals.map((goal) => (
                  <GoalCard
                    key={goal.id}
                    goal={goal}
                    onView={setSelectedGoal}
                  />
                ))}
              </div>
            </div>
          )}

          {goals.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-6 py-24">
              <span className="text-7xl">🌱</span>
              <h2 className="font-title text-3xl font-bold text-[#4F5D2F]">
                Your garden is empty
              </h2>
              <p className="paragraph text-center max-w-sm">
                Plant your first goal and watch it bloom.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-[#4F5D2F] text-[#EFEBCE] rounded-2xl font-bold hover:bg-[#3a4422] transition-all shadow-md"
              >
                {" "}
                Plant Your First Goal
              </button>
            </div>
          )}
        </div>
      )}

      {showForm && (
        <GoalForm onClose={() => setShowForm(false)} onSave={addGoal} />
      )}
    </MainLayout>
  );
};

export default Goals;
