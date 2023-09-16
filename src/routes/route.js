import {
    createBrowserRouter,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 13ac48e (reabase : mreged main)
} from "react-router-dom";
import SnsPage from "../pages/sns";
import MainPage from "../pages/login";
=======
    RouterProvider,
} from "react-router-dom";
import SnsPage from "../pages";
>>>>>>> 77946d4 (reabase : mreged main)
<<<<<<< HEAD
=======
    RouterProvider,
} from "react-router-dom";
import SnsPage from "../pages";
>>>>>>> be465a6 (feat: snspage모달창구현, 목데이터 받아와야함)
=======
>>>>>>> 13ac48e (reabase : mreged main)


export const route = createBrowserRouter ([
    {
      path: "/",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 13ac48e (reabase : mreged main)
      element: <MainPage />,
    },
    {
      path: "/snspage",
      element: <SnsPage />
=======
      element: <SnsPage />,
>>>>>>> 77946d4 (reabase : mreged main)
<<<<<<< HEAD
=======
      element: <SnsPage />,
>>>>>>> be465a6 (feat: snspage모달창구현, 목데이터 받아와야함)
=======
>>>>>>> 13ac48e (reabase : mreged main)
    },
])