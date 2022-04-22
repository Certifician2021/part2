import React from 'react'


const PersonForm = ({addevent, newName, newNo, handleChangename, handleChangeNo}) => {
     return (<form onSubmit={addevent}>
          <div>
            Name: &nbsp; &nbsp; <input value={newName} onChange={handleChangename} />
          </div><br />
          <div>Number: <input value={newNo} onChange={handleChangeNo} /></div>
          <div><br />
            <button type="submit"  >add</button>
          </div>
        </form>
        )
}

export default PersonForm