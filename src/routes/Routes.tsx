import React from 'react';
import {  Router, Routes as MyRoutes, Route } from 'react-router-dom';

import User from '../pages/User';
import Register from '../pages/Register';
import Login from '../pages/Login';
import UserContext from '../context/UserContext';

const Routes = () => {


    return (  
        <UserContext>
            <MyRoutes>
                <Route path={'/'} element={<User />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/register'} element={<Register />} />
            </MyRoutes>
        </UserContext>
    );
};

export default Routes;