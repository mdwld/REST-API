import React, {  useEffect, useState } from 'react'
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import{Card, Button} from 'react-bootstrap';
import { uploadImg, getOneUser } from '../JS/Action/upload';
import { useParams } from 'react-router-dom';

//import { Link } from 'react-router-dom';
const Profile = () => {
  const user = useSelector((state) => state.userReducer.users);
  //const userToGet = useSelector((state) => state.userReducer.userToGet);
 // const [image, setImage] = useState("");
  //setImage(...user, [user.profile_img] )
  const {id} = useParams();
 const userToGetRx = useSelector((state) => state.photoReducer.userToGet)

  const [file , setFile] = useState(null);
  //const [tokeni, setTokeni] = useState("");
 // const localToken = localStorage.getItem("token");
const dispatch = useDispatch();
//setTokeni({...tokeni, localToken});

// we need to implement current token to the handleAdd
const uploadImage = (e) => {
  setFile( e.target.files[0]);
  
}
const handleAdd = () => {
  
  const form = new FormData();
  form.append("profile_img", file);
  //form.append("token", localStorage.getItem("token"));
  //form.append("token", tokeni.token);
  form.append("upload_preset", "Monami");
  dispatch(uploadImg(form));
  //dispatch(getImg(id))
}
useEffect(() => {
  dispatch(getOneUser(id))
})
//an error handled when we add the pic in the cloudinary exactly when we click the upload button according to the "name: req.user" in the rootes of DB!!!!
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${userToGetRx.profile_img}`} alt="avatar" />

      <Card.Body>
      
      <input type="file" onChange={uploadImage}/><button onClick={()=> handleAdd()}>upload</button> 
      
        <Card.Title>{`${user && user.name}`}</Card.Title>
        <Card.Title>{`${user && user.email}`}</Card.Title>
        <Card.Title>{`${user && user.phone}`}</Card.Title>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Profile;