import axios from "axios";
import { useEffect, useState, useMemo } from "react";

//useMemo est un hook qui permet d'optimiser les performances de son code. Il évite des calculs inutiles en conditionnant le traitement d'une fonction avec une dépendance.

// Dans l'exemple ci-dessous, findLongestName n'a pas besoin d'être recalculé à chaque fois que l'on clique sur le bouton Toggle. Relancer le calcul de cette fonction a du sens uniquement si data est mise à jour, et le "commentaire" le plus long est susceptible de changer. On utilise donc ici useMemo avec data comme dépendance, de la même manière que l'on utiliserait une dépendance avec useEffect.

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="App">
      <div> {getLongestName} </div>

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
