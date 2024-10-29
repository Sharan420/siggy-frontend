import Lander from "./pages/Lander";
import Restaurant from "./pages/Restaurant";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Lander />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
