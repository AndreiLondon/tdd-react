/* Second Test
const AwesomeCounter = ({ initialValue }) => {
    return (
        <div>
            <h1>Awesome Counter</h1>
            <span>{initialValue ?? 0}</span>
        </div>
    );
};

export default AwesomeCounter;
*/

/*
// Third Test
import { useState } from "react";
const AwesomeCounter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue ?? 0);
    const add = () => {
        setCount((prevCount) => prevCount + 1)
    }
    return (
        <div>
            <h1>Awesome Counter</h1>
            <span>{count}</span>
            <button onClick={add}>Add</button>
        </div>
    );
};

export default AwesomeCounter;

*/

/*
// 6 Test

import { useState } from "react";
const AwesomeCounter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue ?? 0);
    const add = () => {
        setCount((prevCount) => prevCount + 1)
    };

    const remove = () => {
        setCount((prevCount) => prevCount -1)
    }
    return (
        <div>
            <h1>Awesome Counter</h1>
            <button onClick={remove}>Remove</button>
            <span>{count}</span>
            <button onClick={add}>Add</button>
        </div>
    );
};

export default AwesomeCounter;

*/


// 7 Test

import { useState } from "react";
const AwesomeCounter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue ?? 0);
    const add = () => {
        setCount((prevCount) => prevCount + 1)
    };

    const remove = () => {
        setCount((prevCount) => {
        const result = prevCount - 1;
            if (result < 0) {
            return 0;
            }
            return result;
        });
    };
    return (
        <div>
            <h1>Awesome Counter</h1>
            <button onClick={remove}>Remove</button>
            <span>{count}</span>
            <button onClick={add}>Add</button>
        </div>
    );
};

export default AwesomeCounter;