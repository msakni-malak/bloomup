import { useState } from "react";
import SideBar from "../components/SideBar";
import { useUser } from "../context/UserContext";
import { useGoals } from "../hooks/useGoals";
import { useHabits } from "../hooks/useHabits";
const ProfileSVG = ({ className }) => (
  <svg viewBox="0 0 74 74" className={className}>
    <g>
      <path
        d="M37 72a35 35 0 1 1 35-35 35.04 35.04 0 0 1-35 35zm0-68a33 33 0 1 0 33 33A33.038 33.038 0 0 0 37 4z"
        fill="currentColor"
      />
      <path
        d="M37 42a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10 10.011 10.011 0 0 0-10-10z"
        fill="currentColor"
      />
      <path
        d="M60 63h-2a21 21 0 0 0-42 0h-2a23 23 0 0 1 46 0z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const Profile = () => {
  const { userName, setUserName } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(userName);
  const { goals } = useGoals();
  const { habits } = useHabits();
  const bestStreak = habits.length > 0 ? Math.max(...habits.map(h => h.streak || 0)) : 0;
  const handleSave = () => {
    if (inputValue.trim()) {
      setUserName(inputValue.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setInputValue(userName);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-row min-h-screen bg-[#EFEBCE]">
      <SideBar />

      <div className="flex-1 overflow-y-auto">

        <div className="relative bg-[#A3A380] px-16 py-20 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#4F5D2F] opacity-20" />
          <div className="absolute -bottom-12 right-52 w-48 h-48 rounded-full bg-[#D7CE93] opacity-20" />
          <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[#EFEBCE] opacity-10" />
          <div className="absolute bottom-8 left-1/2 w-16 h-16 rounded-full bg-[#4F5D2F] opacity-10" />

          <div className="relative z-10 flex flex-col items-center gap-5">

            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#EFEBCE] flex items-center justify-center shadow-2xl border-4 border-white/40">
                <ProfileSVG className="w-28 h-28 text-[#4F5D2F]" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-[#4F5D2F] border-2 border-[#A3A380] flex items-center justify-center">
                <span className="text-sm">🌿</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#EFEBCE]/60 text-xs font-bold uppercase tracking-widest mb-2">
                Your Garden Profile
              </p>
              <h1 className="text-5xl font-bold text-[#EFEBCE] leading-tight font-title">
                {userName || "Gardener"}
              </h1>
              <p className="text-[#EFEBCE]/60 text-sm mt-2">
                Growing one habit at a time 🌱
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-10 flex flex-col gap-5">

          <div className="bg-white border border-[#D7CE93] rounded-3xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380]">
                Your Name
              </h2>
              {!isEditing && (
                <button
                  onClick={() => { setIsEditing(true); setInputValue(userName); }}
                  className="text-xs font-bold text-[#7A8F4D] hover:text-[#4F5D2F] transition"
                >
                  ✏️ Edit
                </button>
              )}
            </div>

            {isEditing ? (
              <div className="flex flex-col gap-3">
                <input
                  className="input-box"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  autoFocus
                  placeholder="Your name..."
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleCancel}
                    className="flex-1 py-2 rounded-2xl border-2 border-[#A3A380] text-[#4F5D2F] font-bold text-sm hover:bg-[#D7CE93] transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex-1 py-2 rounded-2xl bg-[#4F5D2F] text-[#EFEBCE] font-bold text-sm hover:bg-[#3a4422] transition"
                  >
                    Save Changes 🌿
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-2xl font-bold text-[#4F5D2F] font-title">
                {userName || "Gardener"}
              </p>
            )}
          </div>

          <div className="bg-white border border-[#D7CE93] rounded-3xl p-6 flex flex-col gap-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380]">
              Your Garden Stats
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Goals Planted", value: goals.length, emoji: "🌷", color: "text-[#BB8588]" },
                { label: "Habits Growing", value: habits.length, emoji: "🌿", color: "text-[#7A8F4D]" },
                { label: "Best Streak", value: bestStreak, emoji: "🔥", color: "text-[#D8A48F]" },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#EFEBCE]">
                  <span className="text-2xl">{stat.emoji}</span>
                  <span className={`text-3xl font-bold ${stat.color} font-title`}>{stat.value}</span>
                  <span className="text-xs font-bold text-[#A3A380] text-center leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* about card */}
          <div className="bg-white border border-[#D7CE93] rounded-3xl p-6 flex flex-col gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380]">
              About BloomUp
            </h2>
            <p className="paragraph leading-relaxed text-sm">
              BloomUp is your personal digital garden where every habit is a seed
              and every goal is a destination. Track your growth, nurture your dreams,
              and bloom one small step at a time. 🌸
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#7A8F4D]" />
              <span className="text-xs font-bold text-[#A3A380]">
                Version 1.0 · Built with 💚
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;