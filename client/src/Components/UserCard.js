import React from 'react'
import {Card} from 'react-bootstrap'
const UserCard = ({users}) => {
  return (
    <div>
         {[
        'Success'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{users.name}</Card.Header>
          <Card.Body>
            <Card.Title>{variant} {users.phone} </Card.Title>
            <Card.Text>
              {users.email}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default UserCard