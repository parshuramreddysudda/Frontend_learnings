import axios from 'axios'

const MainServices ={

getAllUsers,
deleteUser,
getUser
}

function getAllUsers(){
 
   return axios.get(`http://0.0.0.0:4010/api/users`)
}
function deleteUser(id){
    return axios.delete(`http://0.0.0.0:4010/api/users${id}`)
}
function getUser(id){
    return axios.get(`http://0.0.0.0:4010/api/users/${id}`)
}

export default MainServices;