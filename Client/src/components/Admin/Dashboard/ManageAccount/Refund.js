import React, {useState} from 'react'
import {Form, Container, FormGroup,Input, Button,Label} from 'reactstrap'


const Refund = () => {
    const [ref, setReference] = useState('')

    const onSubmit = ( e ) => {
        e.preventDefault();
        if ( ref !== '' ) {
            console.log(ref)
        } else {
            return null
        }
    }
    return (
        <React.Fragment>
            <Container>
                <Form onSubmit={e=>onSubmit(e)}>
                    <FormGroup>
                        <Label><strong>Transaction Refrence</strong></Label>
                        <Input name="ref" type="text"
                            onChange={e=>setReference(e.target.value)}
                        ></Input>
                    </FormGroup>

                    <Button className="btn btn-info">refund</Button>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default Refund