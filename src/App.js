import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./routes/route" 
import GlobalStyles from "./styles/global.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={route} />
    </>
  )

}

export default App;