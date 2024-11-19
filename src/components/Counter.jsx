import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(10);

    const increment = () => {
        if (count < 25) {
            setCount(count + 5);
        }
    };

    const decrement = () => {
        if (count > 10) {
            setCount(count - 2);
        }
    };

    return (
        <div>
            <h1>{count}</h1>
            <button className="bg-red-700 p-2 m-2 rounded-md" onClick={increment}>
                +
            </button>
            <button className="bg-red-700 p-2 m-2 rounded-md" onClick={decrement}>
                -
            </button>
        </div>
    );
}
