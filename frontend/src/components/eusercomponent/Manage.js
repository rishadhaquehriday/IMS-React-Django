import React,{ useEffect, useState }from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import AddEuserModal from "./AddEuserModal";
import UpdateEuserModal from "./UpdateEuserModal";
import { getEusers, deleteEuser } from '../../services/EuserService';


const Manage = () => {
    const [eusers, setEusers] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editEuser, setEditEuser] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
       let mounted = true;
       if(eusers.length && !isUpdated) {
        return;
        }
       getEusers()
         .then(data => {
           if(mounted) {
             setEusers(data);
           }
         })
       return () => {
          mounted = false;
          setIsUpdated(false);
       }
     }, [isUpdated, eusers])

    const handleUpdate = (e, euser) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditEuser(euser);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleDelete = (e, euserId) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteEuser(euserId)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Failed to Delete Ecom-User");
            })
        }
    };

    let AddModelClose=()=>setAddModalShow(false);
    let EditModelClose=()=>setEditModalShow(false);
    return(
        <div className="container-fluid side-container">
        <div className="row siderow" >
        <p id="manage"></p>
            <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                <thead>
                <tr>
                  <th >ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>MobileNo</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  { eusers.map((euser) =>

                  <tr key={euser.id}>
                  <td>{euser.euserId}</td>
                  <td>{euser.FirstName}</td>
                  <td>{euser.LastName}</td>
                  <td>{euser.MobileNo}</td>
                  <td>{euser.Email}</td>
                  <td>{euser.Address}</td>
                  <td>

                  <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event,euser.euserId)}>
                        <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2"
                    onClick={event => handleUpdate(event,euser)}>
                        <FaEdit />
                  </Button>
                  <UpdateEuserModal show={editModalShow} euser={editEuser} setUpdated={setIsUpdated}
                              onHide={EditModelClose}></UpdateEuserModal>
                </td>
                </tr>)}
              </tbody>
            </Table>
            <ButtonToolbar>
                <Button variant="primary" onClick={handleAdd}>
                Add New User
                </Button>
                <AddEuserModal show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddEuserModal>
            </ButtonToolbar>
        </div>
        </div>
    );
};

export default Manage;