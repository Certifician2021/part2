import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Results from './components/Results'


function App() {
  
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [Result, setNewResult] = useState([])


  const hooks = () => {
   axios.get('https://restcountries.com/v3.1/all').then(response => {
       const data = response.data
       setCountries(data)
   })

  } 

  useEffect(hooks, [])
  
  const addevent = () => {
    if(newFilter === ''){

    }
        const reg = new RegExp(newFilter, 'i')
        const filteredCountries = () => countries.filter((country) => country.name.common.match(reg))
        setNewResult(filteredCountries)

  }

  const handleChange = (e) =>{
        setNewFilter(e.target.value)
  }
  return (
    <div>
     <Form addevent={addevent} filter={newFilter} handleChange={handleChange}/>
       <h2>Results :</h2>
      <Results Result={Result} setNewResult={setNewResult}/>
    </div>
  );
}

export default App;
