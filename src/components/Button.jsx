import { useState } from "react"

export default function Button () {
    const [nbClick, setNbClicks] = useState(0)
    const handleClick = () => {
        setNbClicks(nbClick + 1)
    }
    return( 
        <>
        <p>Clicked {nbClick} times</p>
        <button
            onClick={handleClick}
        >
            Click me !
        </button>
        <button onClick={() => setNbClicks(0)}>Reset</button>
        </>
    )
}