import axios from 'axios'
const urlBase = 'http://localhost:3001/persons'

const getAllPersons = () =>{
    return axios.get(urlBase)
}

const insertData = (newObject) => {
   return axios.post(urlBase, newObject)
}

const update = (id, changedata) => {
   return axios.put(`${urlBase}/${id}`,changedata)

}
const deleteData = (id) => {
         return axios.delete(`${urlBase}/${id}`)   
}

const Services = {
    getAllPersons,
    insertData,
    deleteData,
    update
}

export default Services
