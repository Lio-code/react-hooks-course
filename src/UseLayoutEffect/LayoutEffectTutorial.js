import { useLayoutEffect, useEffect, useRef } from "react";

//useEffect et useLayoutEffect sont très similaires.
// Contrairement à useEffect qui est déclenché après le render de l'UI, useLayoutEffect est déclenché avant.
// Cela est utile si l'on veut gérer l'affichage de l'UI avant que certaines données ne soient présentes. Les cas d'utilisations concenent essentiellement les layouts, d'où le nom.

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
