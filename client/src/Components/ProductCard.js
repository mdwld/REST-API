import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { deleteProduct } from '../JS/Action/product'
const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthAdmin = useSelector((State)=>State.adminReducer.isAuthAdmin);
  return (
    <div> 
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.profile_img} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Link to='/products'>
      <Button variant="primary">{product.link}</Button>
      </Link>
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