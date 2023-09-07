import {
    createBrowserRouter,
<<<<<<< HEAD
<<<<<<< HEAD
} from "react-router-dom";
import SnsPage from "../pages/sns";
import MainPage from "../pages/login";
=======
    RouterProvider,
} from "react-router-dom";
import SnsPage from "../pages";
>>>>>>> 77946d4 (reabase : mreged main)
=======
    RouterProvider,
} from "react-router-dom";
import SnsPage from "../pages";
>>>>>>> be465a6 (feat: snspage모달창구현, 목데이터 받아와야함)


export const route = createBrowserRouter ([
    {
      path: "/",
<<<<<<< HEAD
<<<<<<< HEAD
      element: <MainPage />,
    },
    {
      path: "/snspage",
      element: <SnsPage />
=======
      element: <SnsPage />,
>>>>>>> 77946d4 (reabase : mreged main)
=======
      element: <SnsPage />,
>>>>>>> be465a6 (feat: snspage모달창구현, 목데이터 받아와야함)
    },
])