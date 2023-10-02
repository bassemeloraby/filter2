import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const Navigation = ({ handleInputChange, query }) => {
  return (
    <div>
    <Nav>
    
    <InputGroup className="mb-3 mt-2">
        
        <Form.Control
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder="Enter your search shoes."
        />
      </InputGroup>
      
    </Nav>
    
    </div>
  )
}

export default Navigation