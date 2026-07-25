import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EFEBCE] gap-4 text-center px-6">
      <span className="text-6xl">🥀</span>
      <h1 className="text-4xl font-title font-bold text-[#4F5D2F]">Lost in the garden</h1>
      <p className="text-[#A3A380] max-w-md">
        This path doesn't exist. Let's get you back to your habits and goals.
      </p>
      <Link
        to="/dashboard"
        className="mt-2 px-6 py-3 rounded-2xl bg-[#7A8F4D] text-white font-bold hover:bg-[#5f6f3a] transition"
      >
        🌱 Back to My Garden
      </Link>
    </div>
  );
};

export default NotFound;