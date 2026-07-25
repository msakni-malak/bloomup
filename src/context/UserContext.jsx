import { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../api/api';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bloomup_user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setUserName(parsed.name);
    }
    setAuthChecked(true);
  }, []);


  const signup = (email, password, name) => {
    return api.get(`/users?email=${email}`).then((res) => {
        if (res.data.length > 0) {
            return Promise.reject(new Error("Cet email est deja utilise."));
        }
        return api.post("/users", { email, password, name }).then((res) => {
            setUser(res.data);
            setUserName(res.data.name);
            localStorage.setItem("bloomup_user", JSON.stringify(res.data));
            return res.data;
        });
    });
  };
  const login = (email, password) => {
    return api.get(`/users?email=${email}`).then((res) => {
        const found = res.data[0];
        if (!found) {
            return Promise.reject(new Error("Aucun compte avec cet email."));
        }
        if (found.password !== password) {
            return Promise.reject(new Error("Mot de passe incorrect."));
        }
        setUser(found);
        setUserName(found.name);
        localStorage.setItem("bloomup_user", JSON.stringify(found));
        return found;
    });
  };
  const logout = () => {
    setUserName('');
    setUser(null);
    localStorage.removeItem("bloomup_user");
  };

  return (
    <UserContext.Provider value={{ userName, setUserName, user, signup, login, logout, authChecked }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};