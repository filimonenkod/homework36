import { useState } from "react";

const Card = () => {
    const [count, changeCount] = useState(0);

    const handleIncrement = () => {
        changeCount(count + 1);
        console.log("handleIncrement", count);
    };

    const handleDecrement = () => {
        changeCount(count - 1);
        console.log("handleDecrement", count);
    };

    const handleReset = () => {
        changeCount(0);
    };

    return (
        <div className="card">
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Card;