import React, {useState} from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

 const Delete = (props) => {
    const [product_id, setProductId] = useState('')
     //On Form Product Delete
    const onProductDelete = ( e ) => {
        e.preventDefault()
       
    }
   
     return (
         <React.Fragment>
             <Container>
             <Form onSubmit={onProductDelete}>
             <FormGroup>
                 <Label>Product Id</Label>
                 <Input type="text" name="product_id" placeholder="Enter Product Id" onChange={e => setProductId(e.target.value) }></Input>
                 
             
             </FormGroup>
             
             <Button className="btn btn-danger">Delete</Button>
             </Form>
             </Container>
         </React.Fragment>
    )
}



export default Delete