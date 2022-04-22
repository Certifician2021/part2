import React from "react";


const Form = ({addevent, handleChange, filter}) => {
    return(
        <div>
                <input type='text' value={filter} onChange={handleChange}/>
                <button onClick={addevent}>Find</button>

        </div>
    )
}
export default Form