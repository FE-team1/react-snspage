import {
    createBrowserRouter,
<<<<<<< HEAD
} from "react-router-dom";
import SnsPage from "../pages/sns";
import MainPage from "../pages/login";
=======
    RouterProvider,
} from "react-router-dom";
import SnsPage from "../pages";
>>>>>>> 77946d4 (reabase : mreged main)


export const route = createBrowserRouter ([
    {
      path: "/",
<<<<<<< HEAD
      element: <MainPage />,
    },
    {
      path: "/snspage",
      element: <SnsPage />
=======
      element: <SnsPage />,
>>>>>>> 77946d4 (reabase : mreged main)
    },
])