import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { GoalProvider } from "./context/GoalContext";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Habits from "./pages/Habits";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { HabitProvider } from "./context/HabitContext";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
  },
  {
    path: "/goals",
    element: <ProtectedRoute><Goals /></ProtectedRoute>,
  },
  {
    path: "/goals/:id",
    element: <ProtectedRoute><Goals /></ProtectedRoute>,
  },
  {
    path: "/habits",
    element: <ProtectedRoute><Habits /></ProtectedRoute>,
  },
  {
    path: "/profile",
    element: <ProtectedRoute><Profile /></ProtectedRoute>,
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
        <HabitProvider>
          <RouterProvider router={router} />
        </HabitProvider>
      </GoalProvider>
    </UserProvider>
  );
}

export default App;