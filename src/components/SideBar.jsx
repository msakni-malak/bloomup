import { NavLink} from "react-router-dom";
import logo from "../assets/logo.svg";
import { useUser } from '../context/UserContext';
import { useState } from "react";
import LogoutButton from "./LogoutButton";
import ProfileSVG from "../components/ProfileSVG";
import SocialLinks from "../components/SocialLinks";
import { LayoutDashboard, Target, Sprout } from "lucide-react";
const SideBar = () => {
  const { userName } = useUser();
  const [collapsed, setCollapsed] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `nav-link flex items-center ${isActive ? "active-link" : ""} ${collapsed ? "!px-0 w-10 flex justify-center" : ""}`;

  return (
    <div className={`hidden md:flex md:sticky top-0 left-0 h-screen bg-[#4F5D2F] shadow-black shadow-md pt-10 flex-col items-center justify-between transition-all duration-300 z-20
    w-64 ${collapsed ? "md:w-20" : ""}`}>
        <button
          onClick={() => setCollapsed(prev => !prev)}
          className="hidden md:flex absolute top-15 -translate-y-1/2 -right-4 w-12 h-12 rounded-full text-[#A3A380] bg-[#4F5D2F] text-2xl font-bold items-center justify-center"
          aria-label="Toggle sidebar"
        >
          {collapsed ? "›" : "‹"}
        </button>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <img src={logo} alt="BloomUp Logo" className="w-8 h-8" />
            {!collapsed && <h2 className="text-2xl font-bold font-title text-[#EFEBCE]">BloomUp</h2>}
          </div>

          <NavLink
            to="/profile"
            className="flex flex-col items-center gap-2 no-underline cursor-pointer hover:opacity-80 transition"
          >
            <ProfileSVG className="w-12 h-12 text-[#EFEBCE]" />
            {!collapsed && <p className="text-[#EFEBCE] font-bold text-xl">Hello, {userName || 'Guest'}</p>}
          </NavLink>

          <nav className="flex flex-col gap-3 text-xl text-[#EFEBCE]">
            <NavLink to="/dashboard" className={navLinkClass}>
              <LayoutDashboard className="w-5 h-5" />
              {!collapsed && "Dashboard"}
            </NavLink>
            <NavLink to="/goals" className={navLinkClass}>
              <Target className="w-5 h-5" />
              {!collapsed && "Goals"}
            </NavLink>
            <NavLink to="/habits" className={navLinkClass}>
              <Sprout className="w-5 h-5" />
              {!collapsed && "Habits"}
            </NavLink>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-6 mb-5 w-full">
          {!collapsed && (
            <SocialLinks className="w-7 h-7 text-[#EFEBCE]" wrapperClassName="flex flex-row justify-around w-full px-2"/>
          )}

          {!collapsed && <div className="w-full h-px bg-[#EFEBCE]/20" />}

          <LogoutButton variant="minimal" iconOnly={collapsed} />
        </div>
    </div>
  );
};

export default SideBar;