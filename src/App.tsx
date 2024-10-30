import Lander from "./pages/Lander";
import NotFound from "./pages/NotFound";
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
