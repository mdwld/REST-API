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
import { useDispatch } from 'react-redux';
import { current } from './JS/Action/user';
function App() {
  const dispatch = useDispatch();
useEffect(() => {
  if(localStorage.getItem("token")){
    dispatch(current());
  }
}, [dispatch]);

  return (
    <div className="App">
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
     </Routes>
    </div>
  );
}

export default App;
