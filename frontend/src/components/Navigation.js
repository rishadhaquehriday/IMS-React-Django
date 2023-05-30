import React from 'react'
import {Navbar} from 'react-bootstrap'
import logo from '../static/logo.png'
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
  } from 'cdbreact';

  import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand='lg'>
          <Navbar.Brand className="app-logo" href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center"
            />{' '}
            Admin Management Application
          </Navbar.Brand>
      </Navbar>
      <div className='sidebar'>
        <CDBSidebar textColor='#333' backgroundColor='#f0f0f0' >
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Admin Navigation</CDBSidebarHeader>
            <CDBSidebarContent>
            <CDBSidebarMenu>

                <NavLink exact to="/" activeClassname="activeClicked">
                    <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/eusers" activeClassname="activeClicked">
                    <CDBSidebarMenuItem icon="list">Registered Users List</CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/manageusers" activeClassname="activeClicked">
                    <CDBSidebarMenuItem icon="user" iconType="solid">Manage Users</CDBSidebarMenuItem>
                </NavLink>

            </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>
  )
}

export default Navigation;