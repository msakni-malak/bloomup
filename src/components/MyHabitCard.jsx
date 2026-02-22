import { useState, useCallback, useRef } from "react";
const MyHabitCard = ({ habit, onStreak }) => {
  const [checked, setChecked] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const toggleTimer = useCallback(() => {
    if (!timerActive) {
      intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    setTimerActive(prev => !prev);
  }, [timerActive]);

  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  const formatTime = `${minutes}:${secs}`;

  return (
    <div className={`relative habit-card ${checked ? "border-[#7A8F4D] opacity-70" : ""}`}>
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#EFE8CE] rounded-full px-3 py-1">
        <span className="text-sm">🌿</span>
        <span className="text-xs font-bold text-[#4F5D2F]">{habit.streak || 0} day streak</span>
      </div>

      <span className="text-3xl">{habit.icon || "🌱"}</span>
      <h3 className="habit-card-title">{habit.title}</h3>
      <p className="text-sm text-[#7A8F4D]">{habit.duration} {habit.unit} · {habit.days?.join(", ")}</p>

      <div className="flex items-center gap-3 mt-1">
        <span className="font-mono text-lg font-bold text-[#4F5D2F]">{formatTime}</span>
        <button
          onClick={toggleTimer}
          className={`px-4 py-1 rounded-full text-sm font-bold transition-all ${timerActive ? "bg-[#BB8588] text-white" : "bg-[#7A8F4D] text-white"}`}
        >
          {timerActive ? "Pause" : "Start"}
        </button>
      </div>
 
      <button
        className={`button-1 ${checked ? "bg-[#7A8F4D] text-white border-[#7A8F4D]" : ""}`}
        onClick={() => {
          if (!checked) {
            onStreak(habit, "increase");
          } else {
            onStreak(habit, "decrease");
          }
          setChecked(prev => !prev);
        }}
      >
        {checked ? "✓ Done Today!" : "Check In"}
      </button>
    </div>
  );
};
export default MyHabitCard;