import { MEMES_DATA } from "../Data/memes-data";
import { useState, createContext } from "react";

export const MemesContext = createContext();

export const MemesContextProvider = (props) => {
  const [memes, setMemes] = useState(MEMES_DATA);

  return (
    <MemesContext.Provider value={[memes, setMemes]}>
      {props.children}
    </MemesContext.Provider>
  );
};
