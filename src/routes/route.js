import {
    createBrowserRouter,
} from "react-router-dom";
import SnsPage from "../pages/sns";
import MainPage from "../pages/login";


export const route = createBrowserRouter ([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/snspage",
      element: <SnsPage />
    },
])