import Services from "../services/persons"

const Persons = ({name, no , id}) => {
    return (
      <div className="persons"><li>{name} {no}</li> <button onClick={()=>{if(window.confirm(`Delete ${name}?`)){
        Services.deleteData(id).then(response=>{
          window.location.reload(false);
         })}
      }}>Delete</button></div>
    )
  }
  
  export default Persons