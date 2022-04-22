import { useState, useEffect} from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Services from './services/persons'
import './index.css'
import Notification from './components/Notifications'



function App() {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNo, setNewNo] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [noti, setNoti] = useState(null)
  
  const hooks = () => {
         Services.getAllPersons().then(response => {const data = response.data
        setPersons(data)
        
        })

  }

  useEffect(hooks, [])


  
    const handleChangename = (e) => {
          setNewName(e.target.value)
          
    }

    const handleChangeNo =(e) => {
      setNewNo(e.target.value)
    }
  

    const addevent = (e) => {
           e.preventDefault()
           const newObj = {
            name : newName,
            number : newNo,
          }
    
          if(persons.find(el=> el.name === newObj.name)){
            if(window.confirm(`${newObj.name} already exist in list. Want to replace the old number with new one?`)) {
              const person = persons.find(el=>el.name === newObj.name)
              const changedata = {...person, number: newObj.number}
              const id = person.id
              Services.update(id, changedata).then(response =>{
                          setPersons(persons.map(person => person.id !== id ? person : response.data))
                          setNoti(`Number updated for ${person.name}`)
                          setTimeout(()=>{
                            setNoti(null)
                            window.location.reload(false)
                          }, 3000);
                          
                    })
            }
           }
            else{
              Services.insertData(newObj).then(response=>{
                setPersons(persons.concat(response.data))
                setNewFilter('')
                setNoti(`Added ${newObj.name} successfully...`)
                setTimeout(() => {
                  setNoti(null)
                }, 5000);
              })
            }

    }

    const handleFilter = (e) =>{
      setNewFilter(e.target.value)
    }

    const submitButton = () =>{
      const regex = new RegExp( newFilter, 'i' );
      const filteredPersons = () => persons.filter(person => person.name.match(regex))
      setPersons(filteredPersons)
    }

    return (
      <div>
        <h2>Phonebook</h2>
        <Filter submitButton={submitButton} value={newFilter} handleFilter={handleFilter} /><br />
        <Notification message={noti}/>
        <h2>Add new person :</h2>
        <PersonForm  addevent={addevent} newName={newName} newNo={newNo} handleChangename={handleChangename} handleChangeNo={handleChangeNo}   />
        <h2>Numbers</h2>
        <div>
          <ul>{persons.map((x, i) => <Persons setPersons={setPersons} persons={persons} setNoti={setNoti} key={i} name={x.name} id={x.id} no={x.number}/>)} </ul>
        </div>
         
   </div>
  );
}

export default App;
