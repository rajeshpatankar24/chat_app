import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import LogoutPage from './pages/LogoutPage';
import LogInPage from './pages/LogInPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/signup' element={<SignInPage />}></Route>
      <Route path='/login' element={<LogInPage />}></Route>
      <Route path='/logout' element={<LogoutPage />}></Route>
      {/* <Route path='/setting' element={<SettingPage />}></Route> */}
    </Routes>
    </>
   
  );
}

export default App;
