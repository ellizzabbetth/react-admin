import React from 'react';
import {  Router, Routes as MyRoutes, Route } from 'react-router-dom';

import User from '../pages/User';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Link from '../pages/Link';
import UserContext from '../context/UserContext';
import { RedirectToUsers } from '../components/RedirectToUsers';


const Routes = () => {


    return (  
        <UserContext>
            <MyRoutes>
                <Route path={'/'} element={<RedirectToUsers />} />
                <Route path={'/users'} element={<User />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/users/:id/links'} element={<Link />} />
                <Route path={'/register'} element={<Register />} />
            </MyRoutes>
        </UserContext>
    );
};

export default Routes;