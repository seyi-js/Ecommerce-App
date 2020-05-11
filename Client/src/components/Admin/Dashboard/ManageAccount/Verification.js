import React, {useState} from 'react'
import {Form, FormGroup,Label, Input, Button, Row, Col} from 'reactstrap'
export const Verification = () => {
    const [ reference, setReference ] =useState ('')
    const [invoiceCode, setInvoiceCode] = useState('')

    //Verify Transaction
    const onSubmitTForm = (e) => {
        e.preventDefault();
        if ( reference !== ''  ) {
            console.log(reference)
        } else {
          return  null
        }
    }

    //Verify Invoice

    const onSubmitIForm = (e) => {
        e.preventDefault();
        if ( invoiceCode !== '' ) {
            console.log(invoiceCode)
        } else {
          return  null
        }
    }

    //Transaction Details
    const transactionDetails = (
        <React.Fragment>
            <h1>Hello</h1>
        </React.Fragment>
    )

    return (
        <div className="contianer">
            <Row>
                <Col>
                    <Form onSubmit={e=>onSubmitTForm(e)}>
                        <FormGroup>
                            <Label><strong >Verify Transaction</strong></Label>
                            <Input type="text" name="ref" placeholder="Enter Transaction reference" onChange={(e)=>setReference(e.target.value)}></Input>
                        </FormGroup>
                        <Button className="btn btn-info" >Verify</Button>
                    </Form>


                    {transactionDetails}
                </Col>

                

                <Col>
                    <Form onSubmit={ e=>onSubmitIForm(e) }>
                        <FormGroup >
                            <Label><strong>Verify Invoice</strong></Label>
                            <Input type="text" name="invoice_code" placeholder="Enter Invoice Code"  onChange={(e)=>setInvoiceCode(e.target.value)}></Input>
                        </FormGroup>
                        <Button className="btn btn-info">Verify</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Verification;