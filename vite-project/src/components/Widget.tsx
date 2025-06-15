import React, { useEffect, useState } from "react";

const Widget = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [parentCount, setParentCount] = useState<number>(0);

    return (
        <div>
            <button onClick={() => setParentCount((prev) => prev + 1)}>Increment</button>
            <button onClick={() => setIsVisible((prev) => !prev)}> Toogle visibility
            </button>
            {isVisible && <Box parentCount={parentCount}/>}
        </div>
    );
};

export default Widget;

const Box = ({ parentCount }: {parentCount: number}) => {
    const [count, setCount] = useState<number>(0);

    const callback = () => console.log("fetch data from backend");

    useEffect(callback);

    return (
        <div>
            <p>Parent count: {parentCount}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
                Count {count}
            </button>
        </div>
    );
};