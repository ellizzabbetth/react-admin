import React from 'react';
import {  Router, Routes as MyRoutes, Route } from 'react-router-dom';

import User from '../pages/User';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Link from '../pages/Link';
import UserContext from '../context/UserContext';
import { RedirectToUsers } from '../components/RedirectToUsers';
import Products from '../pages/products/Products';
import ProductForm from '../pages/products/ProductForm';
import Orders from '../pages/Orders';


const Routes = () => {


    return (  
        <UserContext>
            <MyRoutes>
                <Route path={'/'} element={<RedirectToUsers />} />
                <Route path={'/users'} element={<User />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/users/:id/links'} element={<Link />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/products'} element={<Products />} />
                <Route path={'/products/create'} element={<ProductForm />} />
                <Route path={'/products/:id/edit'} element={<ProductForm />} />
                <Route path={'/orders'} element={<Orders />} />
            </MyRoutes>
        </UserContext>
    );
};

export default Routes;