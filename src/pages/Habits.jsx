import { useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import SuggestedHabitCard from "../components/SuggestedHabitCard";
import MyHabitCard from "../components/MyHabitCard";
import AddHabitModal from "../components/AddHabitModal";
import { useHabits } from "../hooks/useHabits";

const Habits = () => {
  const { suggestedHabits, habits, loading, error, addHabit, updateStreak } = useHabits();
  const [showModal, setShowModal] = useState(false);
  const [prefill, setPrefill] = useState(null);

  const handleAddFromSuggestion = useCallback((habit) => {
    setPrefill(habit);
    setShowModal(true);
  }, []);

  const handleOpenEmpty = useCallback(() => {
    setPrefill(null);
    setShowModal(true);
  }, []);

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
      <div className="flex-1 p-10 overflow-y-auto">

        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-title font-bold text-[#4F5D2F]">My Garden 🪴</h1>
            <p className="text-[#A3A380] mt-1">Every habit is a seed. Water it daily.</p>
          </div>
          <button
            onClick={handleOpenEmpty}
            className="button-2 px-5"
          >
            + New Habit
          </button>
        </div>

        {habits.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-title font-bold text-[#4F5D2F] mb-5">My Habits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {habits.map(habit => (
                <MyHabitCard key={habit.id} habit={habit} onStreak={updateStreak} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-title font-bold text-[#4F5D2F] mb-2">Suggested Habits</h2>
          <p className="text-[#A3A380] mb-5 text-sm">Pick one and plant it in your garden</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {suggestedHabits.map(habit => (
              <SuggestedHabitCard key={habit.id} habit={habit} onAdd={handleAddFromSuggestion} />
            ))}
          </div>
        </section>
      </div>

      {showModal && (
        <AddHabitModal
          onClose={() => setShowModal(false)}
          onSave={addHabit}
          prefill={prefill}
        />
      )}
    </div>
  );
};

export default Habits;