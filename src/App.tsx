import { useState } from "react";
import Loader from "./pages/Loader";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  return <Loader />;
};

export default App;
