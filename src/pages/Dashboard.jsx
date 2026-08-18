import { useMemo } from "react";
import { useUser } from "../context/UserContext";
import { useGoalContext } from "../context/GoalContext";
import { useHabits } from "../hooks/useHabits";
import MainLayout from "../components/MainLayout";
import HabitIcon from "../components/HabitIcon";
import cardLogo1 from "../assets/cardLogo1.svg";
import cardLogo2 from "../assets/cardLogo2.svg";
import cardLogo3 from "../assets/cardLogo3.svg";
import cardLogo4 from "../assets/cardLogo4.svg";

const getGrowthStage = (progress) => {
  if (progress < 30) return { label: "Seedling", emoji: "🌱", color: "text-[#A3A380] bg-[#f0f0e8]" };
  if (progress < 70) return { label: "Growing", emoji: "🌿", color: "text-[#7A8F4D] bg-[#eef2e4]" };
  return { label: "Blooming", emoji: "🌸", color: "text-[#BB8588] bg-[#fdf0f0]" };
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const today = new Date().toLocaleDateString("en-GB", {
  weekday: "long", day: "numeric", month: "long", year: "numeric"
});

const Dashboard = () => {
  const { userName } = useUser();
  const { goals } = useGoalContext();
  const { habits } = useHabits();

  const totalGoals = useMemo(() => goals.length, [goals]);
  const totalHabits = useMemo(() => habits.length, [habits]);
  const bestStreak = useMemo(() =>
    habits.length > 0 ? Math.max(...habits.map(h => h.streak || 0)) : 0,
    [habits]
  );
  const completedGoals = useMemo(() =>
    goals.filter(g => g.tasks.length > 0 && g.tasks.every(t => t.done)).length,
    [goals]
  );

  const activeGoals = useMemo(() =>
    goals.filter(g => !g.tasks.every(t => t.done)).slice(0, 3),
    [goals]
  );

  const activeHabits = useMemo(() => habits.slice(0, 3), [habits]);

  const stats = [
    { label: "Growing Goals", value: totalGoals, icon: cardLogo1, color: "text-[#BE185D]", bg: "bg-[#fce7f3]", textColor: "text-[#DB2777]", hoverBorder: "hover:border-[#BE185D]" },
    { label: "Active Habits", value: totalHabits, icon: cardLogo2, color: "text-[#15803D]", bg: "bg-[#dcfce7]", textColor: "text-[#16A34A]", hoverBorder: "hover:border-[#15803D]" },
    { label: "Best Streak", value: `${bestStreak} day${bestStreak === 1 ? '' : 's'}`, icon: cardLogo3, color: "text-[#0369A1]", bg: "bg-[#e0f2fe]", textColor: "text-[#0284C7]", hoverBorder: "hover:border-[#0369A1]" },
    { label: "Bloomed Goals", value: completedGoals, icon: cardLogo4, color: "text-[#7E22CE]", bg: "bg-[#f3e8ff]", textColor: "text-[#9333EA]", hoverBorder: "hover:border-[#7E22CE]" },
  ];

  return (
    <MainLayout>
      <div className="relative bg-[#4F5D2F] rounded-3xl px-10 py-8 overflow-hidden mb-8">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#7A8F4D] opacity-30" />
        <div className="absolute bottom-0 right-32 w-32 h-32 rounded-full bg-[#A3A380] opacity-20" />
        <div className="relative z-10">
          <p className="text-[#D7CE93] text-sm font-bold uppercase tracking-widest mb-1">{today}</p>
          <h1 className="text-4xl font-title font-bold text-[#EFEBCE] mb-2">
            {getGreeting()}, {userName}
          </h1>
          <p className="text-[#A3A380] text-sm">
            Your garden is growing beautifully. Keep nurturing your seeds 🌱
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(stat => (
          <div
            key={stat.label}
            className={`${stat.bg} border border-white/40 rounded-3xl p-6 flex flex-row items-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${stat.hoverBorder}`}
          >
            <img src={stat.icon} alt={stat.label} className="w-12 h-12" />
            <div className="flex flex-col">
              <span className={`text-2xl font-bold font-title ${stat.color}`}>{stat.value}</span>
              <span className={`text-xs font-bold ${stat.textColor} tracking-widest`}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white border border-[#D7CE93] rounded-3xl p-6 flex flex-col gap-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380]">
            🌷 Goal Progress
          </h2>
          {activeGoals.length === 0 && (
            <p className="paragraph text-sm text-center py-4">No active goals yet. Plant one! 🌱</p>
          )}
          {activeGoals.map(goal => {
            const progress = goal.tasks.length === 0 ? 0 : Math.round((goal.tasks.filter(t => t.done).length / goal.tasks.length) * 100);
            const stage = getGrowthStage(progress);
            return (
              <div key={goal.id} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#4F5D2F]">{goal.title}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${stage.color}`}>
                    {stage.emoji} {stage.label}
                  </span>
                </div>
                <div className="w-full bg-[#D7CE93] rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-[#7A8F4D] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs text-[#A3A380] font-bold">{progress}% complete</span>
              </div>
            );
          })}
        </div>

        <div className="bg-white border border-[#D7CE93] rounded-3xl p-6 flex flex-col gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380]">
            🌿 Habits Overview
          </h2>
          {activeHabits.length === 0 && (
            <p className="paragraph text-sm text-center py-4">No habits yet. Start growing! 🌱</p>
          )}
          {activeHabits.map(habit => (
            <div key={habit.id} className="flex items-center justify-between p-3 rounded-2xl bg-[#EFEBCE]">
              <div className="flex items-center gap-3">
                <HabitIcon icon={habit.icon} title={habit.title} className="text-2xl w-8 h-8 object-contain" />
                <div>
                  <p className="text-sm font-bold text-[#4F5D2F]">{habit.title}</p>
                  <p className="text-xs text-[#A3A380]">{habit.duration} {habit.unit} / day</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#D7CE93]">
                <span className="text-xs">🔥</span>
                <span className="text-xs font-bold text-[#4F5D2F]">{habit.streak || 0}d</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MainLayout>
  );
};

export default Dashboard;