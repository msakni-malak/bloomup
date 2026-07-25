import { NavLink} from "react-router-dom";
import logo from "../assets/logo.svg";
import { useUser } from '../context/UserContext';
import { useState } from "react";
import LogoutButton from "./LogoutButton";

const SideBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { userName } = useUser();
  const [collapsed, setCollapsed] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active-link" : ""} ${collapsed ? "!px-0 w-10 flex justify-center" : ""}`;

  return (
    <>
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden fixed top-4 left-4 z-30 w-11 h-11 rounded-xl bg-[#4F5D2F] flex flex-col items-center justify-center gap-1.5 shadow-md"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-[#EFEBCE] rounded-full"></span>
          <span className="w-6 h-0.5 bg-[#EFEBCE] rounded-full"></span>
          <span className="w-6 h-0.5 bg-[#EFEBCE] rounded-full"></span>
        </button>
      )}
      <div className={`fixed md:sticky top-0 left-0 h-screen bg-[#4F5D2F] shadow-black shadow-md pt-10 flex flex-col items-center justify-between transition-all duration-300 z-20
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
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
            <svg viewBox="0 0 74 74" className="w-10 h-10 text-[#EFEBCE]">
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
            {!collapsed && <p className="text-[#EFEBCE] font-bold text-xl">Hello, {userName || 'Guest'}</p>}
          </NavLink>

          <nav className="flex flex-col gap-3 text-xl text-[#EFEBCE]">
            <NavLink to="/dashboard" className={navLinkClass}>
              <span className={collapsed ? "" : "mr-2"}>📊</span>{!collapsed && "Dashboard"}
            </NavLink>
            <NavLink to="/goals" className={navLinkClass}>
              <span className={collapsed ? "" : "mr-2"}>🎯</span>{!collapsed && "Goals"}
            </NavLink>
            <NavLink to="/habits" className={navLinkClass}>
              <span className={collapsed ? "" : "mr-2"}>🌿</span>{!collapsed && "Habits"}
            </NavLink>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-6 mb-10 w-full">
          {!collapsed && (
            <div className="flex flex-row gap-5">
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 682.667 682.667" className="w-9 h-9" xmlSpace="preserve">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" fill="#efebce" opacity="1"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                    <path d="M0 0c0 137.243-111.257 248.5-248.5 248.5S-497 137.243-497 0s111.257-248.5 248.5-248.5S0-137.243 0 0Z" transform="translate(504.5 256)" fill="none" stroke="#efebce" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" opacity="1" />
                    <path d="M0 0v32.064c0 13.282 10.767 24.049 24.048 24.049h32.065a8.016 8.016 0 0 1 8.016 8.016v48.097a8.016 8.016 0 0 1-8.016 8.016H8.016c-48.699 0-88.177-39.478-88.177-88.178v-64.128h-56.113a8.016 8.016 0 0 1-8.016-8.017v-48.096a8.016 8.016 0 0 1 8.016-8.016h56.113v-144.291" transform="translate(296.08 288.065)" fill="none" stroke="#efebce" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" opacity="1" />
                    <path d="M0 0v176.355h41.838a8.015 8.015 0 0 1 7.777 6.072l12.024 48.096c1.265 5.06-2.562 9.961-7.777 9.961H0" transform="translate(296.08 15.516)" fill="none" stroke="#efebce" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" opacity="1" />
                  </g>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 682.667 682.667" className="w-9 h-9" xmlSpace="preserve">
                  <defs>
                    <clipPath id="b" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" fill="#efebce" opacity="1"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#b)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                    <path d="M0 0h-336.678c-44.271 0-80.161-35.89-80.161-80.161v-336.678c0-44.271 35.89-80.161 80.161-80.161H0c44.271 0 80.161 35.89 80.161 80.161v336.678C80.161-35.89 44.271 0 0 0Z" transform="translate(424.339 504.5)" fill="none" stroke="#efebce" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" opacity="1" />
                    <path d="M0 0c0-75.262-61.012-136.274-136.274-136.274-75.263 0-136.275 61.012-136.275 136.274s61.012 136.274 136.275 136.274C-61.012 136.274 0 75.262 0 0Z" transform="translate(392.274 256)" fill="none" stroke="#efebce" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" opacity="1" />
                    <path d="M0 0c0-17.709-14.356-32.065-32.064-32.065-17.709 0-32.065 14.356-32.065 32.065 0 17.708 14.356 32.064 32.065 32.064C-14.356 32.064 0 17.708 0 0Z" transform="translate(440.371 408.307)" fill="none" stroke="#efebce" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" opacity="1" />
                    <path d="M0 0c-37.564 26.75-89.987 23.378-123.682-10.317-33.694-33.694-37.067-86.117-10.317-123.682" transform="translate(311.663 334.336)" fill="none" stroke="#efebce" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" opacity="1" />
                    <path d="M0 0c37.565-26.75 89.987-23.377 123.682 10.317 33.694 33.695 37.067 86.117 10.317 123.682" transform="translate(200.337 177.664)" fill="none" stroke="#efebce" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" opacity="1" />
                  </g>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className="w-9 h-9" xmlSpace="preserve">
                  <g>
                    <path d="M503.983 92.994A8.017 8.017 0 0 0 512 84.977V42.221C512 18.941 493.059 0 469.779 0H42.221C18.941 0 0 18.941 0 42.221v427.557C0 493.059 18.941 512 42.221 512h427.557C493.059 512 512 493.059 512 469.779V119.182a8.017 8.017 0 0 0-8.017-8.017 8.017 8.017 0 0 0-8.017 8.017v350.597c0 14.44-11.747 26.188-26.188 26.188H42.221c-14.44 0-26.188-11.748-26.188-26.188V42.221c0-14.44 11.748-26.188 26.188-26.188h427.557c14.441 0 26.188 11.748 26.188 26.188v42.756a8.017 8.017 0 0 0 8.017 8.017z" fill="#efebce" opacity="1" />
                    <path d="M153.386 238.898a8.017 8.017 0 0 0 8.017-8.017v-34.739a8.017 8.017 0 0 0-8.017-8.017H84.977a8.017 8.017 0 0 0-8.017 8.017v230.881a8.017 8.017 0 0 0 8.017 8.017h68.409a8.017 8.017 0 0 0 8.017-8.017V266.154a8.017 8.017 0 0 0-16.034 0v152.852H92.994V204.159h52.376v26.722a8.017 8.017 0 0 0 8.016 8.017zM408.05 210.086c-16.319-13.956-37.454-21.96-57.987-21.96-33.891 0-55.359 11.268-68.944 25.151v-17.134a8.017 8.017 0 0 0-8.017-8.017h-68.409a8.017 8.017 0 0 0-8.017 8.017v230.881a8.017 8.017 0 0 0 8.017 8.017h68.409a8.017 8.017 0 0 0 8.017-8.017V315.858c0-21.457 18.032-34.739 34.739-34.739 20.129 0 34.739 14.61 34.739 34.739v111.165a8.017 8.017 0 0 0 8.017 8.017h68.409a8.017 8.017 0 0 0 8.017-8.017V264.551c0-20.236-9.586-39.579-26.99-54.465zm10.956 208.92H366.63V315.858c0-28.946-21.828-50.772-50.772-50.772-24.418 0-50.772 19.412-50.772 50.772v103.148H212.71V204.159h52.376v34.739c0 3.656 2.573 6.926 6.125 7.789 3.66.888 7.55-.973 9.15-4.385 11.871-25.31 35.323-38.143 69.703-38.143 32.545 0 68.944 25.828 68.944 60.392v154.455zM119.182 76.96c-23.281 0-42.221 18.941-42.221 42.221s18.941 42.221 42.221 42.221 42.221-18.941 42.221-42.221-18.941-42.221-42.221-42.221zm0 68.41c-14.44 0-26.188-11.748-26.188-26.188s11.748-26.188 26.188-26.188 26.188 11.748 26.188 26.188-11.749 26.188-26.188 26.188z" fill="#efebce" opacity="1" />
                  </g>
                </svg>
              </a>
            </div>
          )}

          {!collapsed && <div className="w-full h-px bg-[#EFEBCE]/20" />}

          <LogoutButton variant="minimal" iconOnly={collapsed} />
        </div>
      </div>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-black/40 z-10"
        />
      )}
    </>
  );
};

export default SideBar;