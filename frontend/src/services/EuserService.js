import axios from 'axios';

export function getEusers() {
  return axios.get('http://127.0.0.1:8000/eusers/')
    .then(response => response.data)
}

export function deleteEuser(euserId) {
  return axios.delete('http://127.0.0.1:8000/eusers/' + euserId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addEuser(euser){
  return axios.post('http://127.0.0.1:8000/eusers/', {
    euserId:null,
    FirstName:euser.FirstName.value,
    LastName:euser.LastName.value,
    MobileNo:euser.MobileNo.value,
    Email:euser.Email.value,
    Address:euser.Address.value
  })
    .then(response=>response.data)
}

export function updateEuser(euserid, euser) {
  return axios.put('http://127.0.0.1:8000/eusers/' + euserid + '/', {
    FirstName:euser.FirstName.value,
    LastName:euser.LastName.value,
    MobileNo:euser.MobileNo.value,
    Email:euser.Email.value,
    Address:euser.Address.value
  })
   .then(response => response.data)
}