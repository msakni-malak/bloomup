import { useState } from "react";
import bgForm from "../assets/bgForm.png";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function AutForm() {
  const navigate = useNavigate();
  const { login, signup } = useUser();
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const action = isLogin
      ? login(formData.email, formData.password)
      : signup(formData.email, formData.password, formData.name);
    action.then(() => navigate('/dashboard')).catch((err) => setError(err.message));
  };

  // décalage vertical selon le nombre de champs affichés
  const slots = isLogin
    ? { email: "30%", password: "42%", button: "54%" }
    : { name: "25%", email: "36%", password: "47%", button: "58%" };

  return (
<div className="w-full md:w-1/2 flex items-center justify-center py-10 px-3">
  <div
    className="relative w-[min(96%,500px)] md:w-[min(90%,420px)]"
    style={{ aspectRatio: "1587 / 2245" }}
  >
        <img
          src={bgForm}
          alt=""
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />

        <h2
          className="absolute text-center font-title font-bold text-[#4F5D2F]"
          style={{ top: "11%", left: "28%", width: "35%", fontSize: "clamp(1rem, 4.5vw, 1.5rem)" }}
        >
          {isLogin ? "Welcome Back" : "Start Growing"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="absolute flex flex-col"
          style={{ top: 0, left: "22.5%", width: "46%", height: "100%" }}
        >
          {!isLogin && (
            <input
              type="text" name="name" placeholder="Your Name"
              value={formData.name} onChange={handleChange} required
              className="input-box absolute w-full"
              style={{ top: slots.name, fontSize: "clamp(0.65rem,2.2vw,0.95rem)", padding: "clamp(0.4rem,2vw,1rem)" }}
            />
          )}
          <input
            type="email" name="email" placeholder="Your Email"
            value={formData.email} onChange={handleChange} required
            className="input-box absolute w-full"
            style={{ top: slots.email, fontSize: "clamp(0.65rem,2.2vw,0.95rem)", padding: "clamp(0.4rem,2vw,1rem)" }}
          />
          <input
            type="password" name="password" placeholder={isLogin ? "password" : "create password"}
            value={formData.password} onChange={handleChange} required
            className="input-box absolute w-full"
            style={{ top: slots.password, fontSize: "clamp(0.65rem,2.2vw,0.95rem)", padding: "clamp(0.4rem,2vw,1rem)" }}
          />
          <button
            type="submit"
            className="button-2 absolute w-full"
            style={{ top: slots.button, fontSize: "clamp(0.7rem,2.2vw,1rem)" }}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p
          className="absolute text-center text-[#4F5D2F] font-bold"
          style={{ top: "84%", left: "8%", width: "84%", fontSize: "clamp(0.65rem,2vw,0.9rem)" }}
        >
          {isLogin ? (
            <>Don't Have Seeds Yet?{" "}
              <button onClick={() => setIsLogin(false)} className="font-extrabold hover:underline decoration-2 underline-offset-4">
                Sign Up
              </button>
            </>
          ) : (
            <>I Already Have Seeds,{" "}
              <button onClick={() => setIsLogin(true)} className="font-extrabold hover:underline decoration-2 underline-offset-4">
                LogIn
              </button>
            </>
          )}
        </p>

        {error && (
          <p className="absolute text-center text-[#BB8588] font-bold text-sm" style={{ top: "94%", left: "10%", width: "80%" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}