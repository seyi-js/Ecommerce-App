import React, { Component } from 'react';
import { Row, Container, Col, Label, Form, FormGroup, Input } from 'reactstrap';
import {connect} from 'react-redux'

export class SelectBar extends Component {

    

  
    render() {
       
        return (
            <div className="SelectBar">
                <Container>
                    <Row>
                    <Col md='4'>
                            <h3>{ this.props.filteredItems.length } items  found</h3>
                            </Col>
                        <Col md='4'>
                            <Form>
                            <FormGroup>
                            <Label for="exampleSelect">Order By Price</Label>
                                    <Input type="select"                                 onChange={ this.props.handleChangeSort } name="select" id="exampleSelect">
                                        <option value="">Select</option>
                              <option value="lowest">Lowest to Highest</option>
                              <option value="highest">Highest to Lowest</option>
                              
                            </Input>
                          </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default SelectBar;




