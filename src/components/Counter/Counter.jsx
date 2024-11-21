import React, {useState} from "react";
import style from "./Counter.module.scss";

const Counter = function () {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
};

export default Counter;