import React,{useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'
import { getEusers } from '../../services/EuserService'

const Eusers = () => {
  const [eusers,setEusers] = useState([]);

  useEffect(()=>{
    let mounted = true;
    getEusers().then(data=>{
        if(mounted){
            setEusers(data)
        }
    })
    return () => mounted = false
  },[]);

  return (
    <div className="row siderow">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile No</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {eusers.map((euser)=>{
                   return <tr key={euser.id}>
                        <td>{euser.euserId}</td>
                        <td>{euser.FirstName}</td>
                        <td>{euser.LastName}</td>
                        <td>{euser.MobileNo}</td>
                        <td>{euser.Email}</td>
                        <td>{euser.Address}</td>
                    </tr>
                })}
                
            </tbody>
        </Table>
    </div>
  ); 
}

export default Eusers;