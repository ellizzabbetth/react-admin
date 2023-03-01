import React from 'react';
import { IUser }  from '../models/user';
import {  Link } from 'react-router-dom';
import {connect} from "react-redux";
import axios from "axios";


const Nav = (props: { user: IUser | null}) => {

   const logout = async () => {
      await axios.post('logout', {});
  }
  
   return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
        <ul className="my-2 my-md-0 mr-md-3">
            <Link to="/profile"
                  className="p-2 text-white text-decoration-none">{props.user?.first_name} {props.user?.last_name}</Link>
            <Link to="/login" className="p-2 text-white text-decoration-none"
                  onClick={logout}
            >Sign Out</Link>
        </ul>
    </nav>
 );
}

export default connect(
    (state: { user: IUser }) => {
        return {
            user: state.user
        };
    }
)(Nav);