import {
    createBrowserRouter,
} from "react-router-dom";
import SnsPage from "../pages";


export const route = createBrowserRouter ([
    {
      path: "/",
      element: <SnsPage />,
    },
])