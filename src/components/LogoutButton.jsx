import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import doorLogo from "../assets/doorLogo.png";
const LogoutButton = ({ variant = "pill", iconOnly = false }) => {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (variant === "minimal") {
    return (
      <button
        onClick={handleLogout}
        className={`nav-link flex items-center gap-2 text-[#EFEBCE] text-xl transition ${iconOnly ? "!px-0 w-10 justify-center" : ""}`}
        aria-label="Log out"
      >
        <img src={doorLogo} alt="" className="w-8 h-8" />
        {!iconOnly && <span>Log out</span>}
      </button>
    );
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#BB8588] text-[#BB8588] font-bold text-sm hover:bg-[#BB8588] hover:text-white transition-all"
    >
      Log out
    </button>
  );
};

export default LogoutButton;