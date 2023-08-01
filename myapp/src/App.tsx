import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import Login from './pages/Login';
import { initializeApp } from 'firebase/app'
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';

export const firebase = initializeApp(config.firebaseConfig)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
