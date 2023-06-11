import { createBrowserRouter } from "react-router-dom";
import AdminPage from "../Page/Admin";
import LoginPage from "../Page/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);
