import React, { use, useEffect } from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import SettingPage from './pages/SettingPage';
import ProfilePage from './pages/ProfilePage';
import { useAuthStore } from './store/userAuthStore';
import { useThemeStore } from "./store/useThemeStore";
import {Loader} from 'lucide-react';
import { Toaster } from 'react-hot-toast';


function App() {

  const {authUser,checkAuth,isCheckingAuth} = useAuthStore();
  const { theme } = useThemeStore();
  useEffect(()=>{
    checkAuth()
  },[checkAuth]);


  if(isCheckingAuth && !authUser){
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className = 'size-10 animate-spin' />
        
      </div>
    )
  }

  return (
    <>
    <div data-theme={theme} >
      <Navbar />
      <Routes>
      <Route path='/' element={authUser?<HomePage />: <Navigate to ='/login' />}></Route>
      <Route path='/signup' element={!authUser?<SignUpPage />: <Navigate to = '/' />}></Route>
      <Route path='/login' element={!authUser?<LogInPage /> : <Navigate to = '/' />}></Route>
      <Route path='/profile' element={authUser ?<ProfilePage />: <Navigate to = '/login' />}></Route>
      <Route path='/settings' element={<SettingPage />}></Route>
    </Routes>

    <Toaster />
    </div>
    </>
   
  );
}

export default App;
