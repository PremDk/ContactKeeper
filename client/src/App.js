import React from 'react';
import './App.css';

import { Navbar } from './layouts/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertState from './context/alert/AlerState';
import Alerts from './layouts/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route
                  exact
                  path='/'
                  element={<PrivateRoute element={<Home />} />}
                />
              </Routes>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
