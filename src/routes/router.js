import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import BoardPage from "../pages/board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/board",
    element: <BoardPage />,
  },
]);

export default router;
