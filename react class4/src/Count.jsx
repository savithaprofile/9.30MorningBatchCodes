import React from 'react'
import {useState} from 'react'
const Count = () => {
    const [count, setCount] = useState(0);
    console.log("Im count. Im getting rendered")
    return (
        <div style={{border:'1px solid black'}}>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>hello im a part of count</h1>
        </div>
    )
}

export default Count