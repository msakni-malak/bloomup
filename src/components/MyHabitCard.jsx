import { useState, useCallback, useRef } from "react";
const MyHabitCard = ({ habit, onCheckIn, onDelete }) => {
  const lastCheckInDate = habit.lastCheckIn;
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const isBroken = lastCheckInDate && lastCheckInDate !== today && lastCheckInDate !== yesterday;
  const isToday = lastCheckInDate === today;
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
    <div className={`relative habit-card ${isToday ? "border-[#7A8F4D] opacity-70" : ""}`}>
      <button
        onClick={() => onDelete(habit.id)}
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#BB8588] text-white text-xs font-bold flex items-center justify-center shadow-md hover:bg-[#a06060] transition-all z-10"
        aria-label="Delete habit">
        ✕
      </button>
      <div className={`absolute top-4 right-4 flex items-center gap-1 rounded-full px-3 py-1 ${
        isToday ? "bg-[#dcefd0]" : isBroken ? "bg-[#f5dcdc]" : "bg-[#e8e6e0]"
      }`}>
        <span className="text-sm">{isToday ? "🌿" : isBroken ? "💔" : "⏳"}</span>
        <span className={`text-xs font-bold ${
          isToday ? "text-[#4F5D2F]" : isBroken ? "text-[#BB8588]" : "text-[#8a8a80]"
        }`}>
          {habit.streak || 0} day streak
        </span>
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
        className={`button-1 ${isToday ? "bg-[#7A8F4D] text-white border-[#7A8F4D]" : ""}`}
        onClick={() => {
          onCheckIn(habit);
        }}
      >
        {isToday ? "✓ Done Today!" : "Check In"}
      </button>
    </div>
  );
};
export default MyHabitCard;