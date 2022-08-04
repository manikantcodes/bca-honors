import { useState } from 'react'
import "../assets/css/buttonApp.css"

export default function ButtonApp() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1)
    }

    function handleDecrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div id="button-app">
            <div>
                <h1>Count: {count}</h1>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}
