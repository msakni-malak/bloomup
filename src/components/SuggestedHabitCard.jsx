import HabitIcon from "./HabitIcon";

const SuggestedHabitCard = ({ habit, onAdd }) => (
  <div className="habit-card">
    <span className="text-4xl">
      <HabitIcon icon={habit.icon} title={habit.title} className="w-10 h-10 object-contain inline-block" />
    </span>
    <span className="text-xs font-bold uppercase tracking-widest text-[#A3A380]">{habit.category}</span>
    <h3 className="habit-card-title">{habit.title}</h3>
    <p className="text-sm text-[#7A8F4D]">{habit.duration} {habit.unit} / day</p>
    <button onClick={() => onAdd(habit)} className="button-1">
      + Add to My Habits
    </button>
  </div>
);

export default SuggestedHabitCard;
