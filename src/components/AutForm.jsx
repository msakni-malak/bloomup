import { useState } from "react";
import bgForm from "../assets/bgForm.png";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
export default function AutForm() {
  const navigate = useNavigate();
  const { login, signup } = useUser();   // au lieu de setUserName
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const action = isLogin
      ? login(formData.email, formData.password)
      : signup(formData.email, formData.password, formData.name);

    action
      .then(() => navigate('/dashboard'))
      .catch((err) => setError(err.message));
  };

  return (
    <div 
      className="min-h-screen w-[50vw] flex flex-col gap-6 items-center pt-30 pr-10 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgForm})` }}
    >
        <h2 className="text-3xl font-title font-bold text-[#4F5D2F] text-center">
          {isLogin ? "Welcome Back" : "Start Growing"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input-box"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input-box"
            required
          />
          <input
            type="password"
            name="password"
            placeholder={isLogin ? "password" : "create password"}
            value={formData.password}
            onChange={handleChange}
            className="input-box"
            required
          />
          <button
            type="submit"
            className="button-2"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
          
        </form>
        <p className="text-[#4F5D2F] font-bold absolute bottom-5">
          {isLogin ? (
            <>
              Don't Have Seeds Yet? 
              <button 
                onClick={() => setIsLogin(false)}
                className="font-extrabold hover:underline decoration-2 underline-offset-4"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              I Already Have Seeds, 
              <button 
                onClick={() => setIsLogin(true)}
                className="font-extrabold hover:underline decoration-2 underline-offset-4"
              >
                LogIn
              </button>
            </>
          )}
        </p>
        {error && <p className="text-[#BB8588] font-bold text-sm text-center">{error}</p>}
      </div>
  );
}