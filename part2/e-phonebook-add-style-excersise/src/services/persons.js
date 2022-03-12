import axios from "axios";

const baseUrl = '/api/persons'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addPerson = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = personId => {
    return axios.delete(`${baseUrl}/${personId}`)
}


const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

export default {getAll, addPerson, deletePerson, update}