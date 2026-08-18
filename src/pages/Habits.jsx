import { useState, useCallback } from "react";
import MainLayout from "../components/MainLayout";
import SuggestedHabitCard from "../components/SuggestedHabitCard";
import MyHabitCard from "../components/MyHabitCard";
import AddHabitModal from "../components/AddHabitModal";
import { useHabits } from "../hooks/useHabits";
import ConfirmModal from "../components/ConfirmModal";
import cardLogo2 from "../assets/cardLogo2.svg";

const Habits = () => {
  const { suggestedHabits, habits, loading, error, addHabit, checkIn, deleteHabit } = useHabits();
  const [showModal, setShowModal] = useState(false);
  const [prefill, setPrefill] = useState(null);
  const [habitToDelete, setHabitToDelete] = useState(null);

  const handleAddFromSuggestion = useCallback((habit) => {
    setPrefill(habit);
    setShowModal(true);
  }, []);

  const handleOpenEmpty = useCallback(() => {
    setPrefill(null);
    setShowModal(true);
  }, []);

  if (loading) return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-[#7A8F4D] text-xl font-bold animate-pulse">Growing your garden... 🌱</p>
      </div>
    </MainLayout>
  );

  if (error) return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-[#BB8588] text-xl font-bold">Something went wrong 🍂</p>
      </div>
    </MainLayout>
  );

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-5xl font-title font-bold text-[#4F5D2F]">My Garden</h1>
          <p className="paragraph mt-1">Every habit is a seed. Water it daily.</p>
        </div>
        <button
          onClick={handleOpenEmpty}
          className="button-2"
        >
          + New Habit
        </button>
      </div>

      {habits.length > 0 && (
        <section className="mb-10">
          <h2 className="font-title text-2xl font-bold text-[#4F5D2F] mb-5 flex items-center gap-2">
            <img
              src={cardLogo2}
              alt="Habit Logo"
              className="w-10 h-10"
            />My Habits 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {habits.map(habit => (
              <MyHabitCard key={habit.id} habit={habit} onCheckIn={checkIn} onDelete={() => setHabitToDelete(habit.id)} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-title text-2xl font-bold text-[#4F5D2F]">Suggested Habits</h2>
        <p className="paragraph">Pick one and plant it in your garden</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {suggestedHabits.map(habit => (
            <SuggestedHabitCard key={habit.id} habit={habit} onAdd={handleAddFromSuggestion} />
          ))}
        </div>
      </section>

      {showModal && (
        <AddHabitModal
          onClose={() => setShowModal(false)}
          onSave={addHabit}
          prefill={prefill}
        />
      )}
      {habitToDelete && (
        <ConfirmModal
          message="Uproot this habit? This can't be undone. 🍂"
          onCancel={() => setHabitToDelete(null)}
          onConfirm={() => {
            deleteHabit(habitToDelete);
            setHabitToDelete(null);
          }}
        />
      )}
    </MainLayout>
  );
};

export default Habits;