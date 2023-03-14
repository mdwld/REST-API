import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { deleteProduct,postReview } from '../JS/Action/product'
//import { addHistory } from '../JS/Action/historique'
const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthAdmin = useSelector((State)=>State.adminReducer.isAuthAdmin);
  const isAuth = useSelector((state)=>state.productReducer.isAuth);
  //const {id} = useParams();
  //historique
  //const users = useSelector((state) => state.adminReducer.listUsers)
  //const String = `download ${product.name}`
//const [newHistory, setNewHistory] = useState({history:""});
//setNewHistory(String);


  //historique 
  return (
    <div> 
        <Card style={{ width: '18rem' }}>
          <Link to={`${product.profile_img}`} >
    <Card.Img variant="top" src={product.profile_img} />
    </Link>
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      {isAuth?
      <Link to='/products'>
      <Button variant="primary" onClick={()=>dispatch(postReview(product._id))}>{product.link}</Button>
      </Link> : <Link to='/products'>
      <Button variant="primary">{product.link}</Button>
      </Link>
      }
      {isAuthAdmin ?(<div>
      <Button variant="primary" onClick={()=>dispatch(deleteProduct(product._id))}>Delete</Button>
      <Button variant="primary" onClick={()=>navigate(`/edit/${product._id}`)}>Edit</Button>
      </div>) : null
    }
    </Card.Body>
  </Card>
  </div>
  )
}

export default ProductCard