import {
    createBrowserRouter,
} from "react-router-dom";
import SnsPage from "../pages";
import LoginPage from "../pages/board";


export const route = createBrowserRouter ([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/snspage",
      element: <SnsPage />
    },
])