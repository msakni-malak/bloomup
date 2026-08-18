import { useState } from "react";
import MainLayout from "../components/MainLayout";
import LogoutButton from "../components/LogoutButton";
import { useUser } from "../context/UserContext";
import { useGoals } from "../hooks/useGoals";
import { useHabits } from "../hooks/useHabits";
import ProfileSVG from "../components/ProfileSVG";
import SocialLinks from "../components/SocialLinks";
import cardLogo1 from "../assets/cardLogo1.svg";
import cardLogo2 from "../assets/cardLogo2.svg";
import cardLogo3 from "../assets/cardLogo3.svg";
import bgprofile from "../assets/bgprofile.png";
import emoji4 from "../assets/emoji4.svg";

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

  const stats = [
    { label: "Goals Planted", value: goals.length, icon: cardLogo1, color: "text-[#BE185D]", bg: "bg-[#fce7f3]", textColor: "text-[#DB2777]", hoverBorder: "hover:border-[#BE185D]" },
    { label: "Habits Growing", value: habits.length, icon: cardLogo2, color: "text-[#15803D]", bg: "bg-[#dcfce7]", textColor: "text-[#16A34A]", hoverBorder: "hover:border-[#15803D]" },
    { label: "Best Streak", value: `${bestStreak} day${bestStreak === 1 ? '' : 's'}`, icon: cardLogo3, color: "text-[#0369A1]", bg: "bg-[#e0f2fe]", textColor: "text-[#0284C7]", hoverBorder: "hover:border-[#0369A1]" },
  ];

  return (
    <MainLayout noPadding>
      <div
        className="relative w-full h-96 sm:h-[28rem] overflow-hidden shadow-[0_8px_16px_-8px_rgba(0,0,0,0.25)]"
        style={{
          backgroundImage: `url(${bgprofile})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full px-8 sm:px-16 md:px-24">
          <div className="relative">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#EFEBCE] flex items-center justify-center shadow-2xl border-4 border-white/40">
              <ProfileSVG className="w-24 h-24 sm:w-28 sm:h-28 text-[#4F5D2F]" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4F5D2F] border-2 border-[#A3A380] flex items-center justify-center">
              <span className="text-xs sm:text-sm">🌿</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base font-bold text-[#4F5D2F] mb-2">
              Your Garden Profile
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {isEditing ? (
                <>
                  <input
                    className="input-box text-center text-2xl sm:text-3xl font-bold text-[#4F5D2F] font-title placeholder-white/40"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    autoFocus
                    placeholder="Your name..."
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleCancel}
                      className="px-3 py-1.5 rounded-xl border-2 border-white/40 text-white font-bold text-xs hover:bg-white/10 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-3 py-1.5 rounded-xl bg-white text-[#4F5D2F] font-bold text-xs hover:bg-[#D7CE93] transition"
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-3xl sm:text-5xl font-bold text-[#4F5D2F] leading-tight font-title">
                    {userName || "Gardener"}
                  </h1>
                  <button
                    onClick={() => { setIsEditing(true); setInputValue(userName); }}
                    className="px-5 py-3 rounded-2xl bg-[#EFEBCE] text-[#4F5D2F] font-bold text-base sm:text-lg hover:bg-white transition flex items-center gap-2 shadow-sm"
                  >
                    <img src={emoji4} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 sm:p-10 flex flex-col gap-5">

        <div className="bg-white border border-[#D7CE93] rounded-3xl p-6 flex flex-col gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380]">
            Your Garden Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stats.map(stat => (
              <div
                key={stat.label}
                className={`${stat.bg} border border-white/40 rounded-3xl p-5 flex flex-row items-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${stat.hoverBorder}`}
              >
                <img src={stat.icon} alt={stat.label} className="w-10 h-10 sm:w-12 sm:h-12" />
                <div className="flex flex-col">
                  <span className={`text-xl sm:text-2xl font-bold font-title ${stat.color}`}>{stat.value}</span>
                  <span className={`text-xs font-bold ${stat.textColor} tracking-widest`}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

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
        <div className="border-t border-[#D7CE93] pt-5 mt-2 flex items-center justify-between">
          <SocialLinks className="w-9 h-9 text-[#7A8F4D]" />
          <LogoutButton />
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
