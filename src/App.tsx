import { useState, useEffect } from "react";
import { sample } from "lodash";
import Loader from "./pages/Loader";
import Form from "./pages/Form";

const App = () => {
  const splashtext = [
    "Juice Pilaun, Mausambi Ka!",
    "HARAMZADE!",
    "KEK!!?!?!?",
    "diet ka kya hua teri?",
    "Navratre Khatam?",
    "Karli Winter Arc Puri?",
    "Guru Ji ka pyaar dilata hu Aaja",
    "Bhaiya, 2 Plate Poha dena",
    "Twenchy Rupees ke Momos miljugi?",
    "I work for ankur warikoo btw",
    "bore hogaya hu, kuch naya batao",
    "Teri bhains ki aankh, kya chahiye?",
    "Bhai padhlene de",
    "Kya chahiye bhai?",
    "Lurr Chusta hai?",
    "Ek plate chowmein dena",
    "Ek chakke ne match nahi jitaya",
    "RR band karo",
  ];

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [loaded, setLoaded] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(false);
  const [splashText] = useState(sample(splashtext));

  useEffect(() => {
    (async () => {
      await sleep(2000);
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setRemoveLoader(true);
      }, 500);
    }
  });

  return (
    <>
      {!removeLoader && (
        <Loader className={loaded ? "opacity-0" : ""} splashText={splashText} />
      )}
      <Form />
    </>
  );
};

export default App;
