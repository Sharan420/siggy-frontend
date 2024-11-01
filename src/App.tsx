import Lander from "./pages/Lander";
import NotFound from "./pages/NotFound";
import Restaurant from "./pages/Restaurant";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Lander />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "*",
    element: <NotFound />,
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
