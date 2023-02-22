import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import { getAllUsers } from '../JS/Action/admin';

const UserList = () => {

const listUsers = useSelector((State) => State.adminReducer.listUsers);
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getAllUsers())
},[dispatch]);
  return (
    <div>
      <h5> UsersList</h5> 
{listUsers.map((el) => (<UserCard users={el} key= {el._id}/> ))}
    </div>
  )
}

export default UserList