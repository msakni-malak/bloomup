import { NavLink } from "react-router-dom";
import { LayoutDashboard, Target, Sprout } from "lucide-react";

const BottomNav = () => {
  const navLinkClass = ({ isActive }) =>
    `flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-t-xl transition-all duration-300 min-w-[60px] ${
      isActive
        ? "text-[#EFEBCE] bg-[#4F5D2F]/30"
        : "text-[#A3A380] hover:text-[#EFEBCE]"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 bg-[#4F5D2F] shadow-[0_-4px_16px_rgba(0,0,0,0.15)] flex items-center justify-around py-2 md:hidden">
      <NavLink to="/dashboard" className={navLinkClass}>
        <LayoutDashboard className="w-6 h-6" />
        <span className="text-xs font-bold">Dashboard</span>
      </NavLink>
      <NavLink to="/goals" className={navLinkClass}>
        <Target className="w-6 h-6" />
        <span className="text-xs font-bold">Goals</span>
      </NavLink>
      <NavLink to="/habits" className={navLinkClass}>
        <Sprout className="w-6 h-6" />
        <span className="text-xs font-bold">Habits</span>
      </NavLink>
      <NavLink to="/profile" className={navLinkClass}>
        <svg viewBox="0 0 74 74" className="w-6 h-6 text-current">
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
        <span className="text-xs font-bold">Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;