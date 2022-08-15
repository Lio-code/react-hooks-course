import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

//useCallback hook est similaire à useMemo, dans le sens où il permet aussi d'éviter le calcul inutile d'une fonction, ou de limiter son application en spécifiant une dépendance.
//Contrairement à useMemo qui stocke une valeur de retour, useCallback stocke une fonction en retour.




export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
