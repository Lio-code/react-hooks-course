import React, {useState} from "react"

const StateTutorial2 = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((c) => c + 1)
    }

    return <div>{counter} <button onClick={increment}>Increment</button></div>
}

export default StateTutorial2;

