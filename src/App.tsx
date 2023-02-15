import React from 'react';
import Menu from './components/Menu';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import User from './pages/User';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<User />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
