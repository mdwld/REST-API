import React, { useEffect } from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Add from './Pages/Add';
import Products from './Pages/Products';
import Edit from './Pages/Edit';
import NavBar from './Components/NavBar';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/Action/user';
import {currentAdmin} from './JS/Action/admin';
import Users from './Pages/Users';
import { regSw , subscribe } from './helper';
import Historique from './Pages/Historique';
function App() {
//Notification
async function registerAndSubscribe () {
  try {
    const serviceWorkerReg = await regSw ();
    await subscribe (serviceWorkerReg);
  } catch (error) {
    console.log (error);
  }
}

//Notification 
  const isAuthAdmin = useSelector((State)=>State.adminReducer.isAuthAdmin);
  const dispatch = useDispatch();
useEffect(() => {
  if(localStorage.getItem("token")){
    dispatch(current());
  }
}, [dispatch]);

useEffect(() => {
  if(localStorage.getItem('token')){
    dispatch(currentAdmin())
  }
}, [dispatch]);
  return (

    //Notification 
    <div className="App">
    <button onClick={registerAndSubscribe}>
      subscribe for push notifications
    </button>
 
  
   
      <NavBar/>
     <h1>F-LAMBDA</h1>
     <Routes>
<Route path='/' element={<Home />}/>
<Route path='/*' element={<Error />}/>
<Route path='/add' element={<Add />}/>
<Route path='/products' element={<Products />}/>
<Route path='/edit/:id' element={<Edit />}/>
<Route path='/register' element={<Register />}/>
<Route path='/login' element={<Login />}/>
<Route path='/profile' element={<Profile />}/>
<Route path='/allHistory' element={<Historique/>}/>
{isAuthAdmin ? (<Route path='/users' element={<Users/>}/>):null}
     </Routes>
    </div>
  );
}

export default App;
