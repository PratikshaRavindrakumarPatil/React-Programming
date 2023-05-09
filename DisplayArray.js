import React from 'react';

function DisplayArray()
{
    const Arr=[11,21,51,101,121]
    
    return(Arr.map((Arr)=>
    
    <div><h3>{Arr}</h3></div>
    ))

    // return(
    //     <div>{Arr}</div>
    // )
    
}

export default DisplayArray;