import { useState, useEffect } from "react";
import Loader from "./pages/Loader";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      <Loader className={loaded ? "opacity-0" : ""} />
    </>
  );
};

export default App;
