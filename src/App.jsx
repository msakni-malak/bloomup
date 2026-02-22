import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { GoalProvider } from "./context/GoalContext";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Habits from "./pages/Habits";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/goals",
    element: <Goals />,
  },
  {
    path: "/goals/:id",
    element: <Goals />,
  },
  {
    path: "/habits",
    element: <Habits />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <UserProvider>
      <GoalProvider>
        <RouterProvider router={router} />
      </GoalProvider>
    </UserProvider>
  );
}

export default App;