import { useState } from "react";

function Compteur(){
    const [state,setState] = useState(0);
    return(
        <>
        <h3>value : {state}</h3>
        <button onClick={()=>setState(state+1)}>+</button>
        <button onClick={()=>setState(state-1)}>-</button>
        <button onClick={()=>setState(0)}>null</button>

        </>
    )

}
export default Compteur;