import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { deleteProduct } from '../JS/Action/product'
const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div> 
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Link to='/products'>
      <Button variant="primary">{product.link}</Button>
      </Link>
      
      <Button variant="primary" onClick={()=>dispatch(deleteProduct(product._id))}>Delete</Button>
      <Button variant="primary" onClick={()=>navigate(`/edit/${product._id}`)}>Edit</Button>
      
    </Card.Body>
  </Card>
  </div>
  )
}

export default ProductCard