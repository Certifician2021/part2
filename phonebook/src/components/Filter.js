import React from 'react'


const Filter = (props) => {
     return (
         <div>
             <h3>Search</h3>
             <input type='text' value={props.value} onChange={props.handleFilter}/>
             <button onClick={props.submitButton}>Find</button>
         </div>
        )
}

export default Filter