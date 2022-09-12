import {React, useState} from "react";

function Toggle() {

    const [on , setOn] = useState(false);

    return ( 
        <div className="toggle" onClick={() => setOn(true)}>
             Anh {on ? "On" : "Off"}
        </div>
     );
}

export default Toggle;