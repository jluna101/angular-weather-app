import React from 'react';
import { useState } from 'react';

function Counter(props) {

    const [clicks, setClicks] = useState(0);

    return (

        <div>
            <h1>Counter</h1>
            <h2 >Current Count: {clicks}</h2>
            <button onClick={() => setClicks(clicks + 1) }>+</button>
            <button onClick={() => setClicks(clicks - 1) }>-</button>
        </div>

    );
}

export default Counter;