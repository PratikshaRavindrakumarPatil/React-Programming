import React, { useState } from 'react';

function CounterApp()
{
    const[Count,setCount]=useState(0);
    
    const addSetCountHandler=()=>{
        setCount(Count+1);
    }

    const subSetCountHandler=()=>{
        setCount(Count-1);
    }

    return(
        <div>
            <h1>Counter App</h1>
            <h2>Counter: {Count}</h2>      
            <button onClick={addSetCountHandler}>Add</button>
            <button onClick={subSetCountHandler}>Remove</button>
        </div>
    );
}

export default CounterApp;