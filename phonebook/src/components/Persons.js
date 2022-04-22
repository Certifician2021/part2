import Services from "../services/persons"

const Persons = ({name, no , id ,setNoti, setPersons , persons}) => {
    return (
      <div className="persons"><li>{name} {no}</li> <button onClick={()=>{if(window.confirm(`Delete ${name}?`)){
        Services.deleteData(id).then(response=>{
          window.location.reload(false);
         }).catch(error => {
          setNoti(`'${name}' was already removed from server`)
          setTimeout(() => {
            setNoti(null)
          }, 5000)
          setPersons(persons.filter(n => n.id !== id))
        })}
      }}>Delete</button></div>
    )
  }
  
  export default Persons