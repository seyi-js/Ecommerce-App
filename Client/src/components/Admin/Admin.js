import React, { useState,  } from 'react';
import { Container, Button,Table , Form, FormGroup, Label, Input, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames';
import { addNewItem, deleteProduct, edit } from '../../actions/itemActions'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

export const AdminBoard = ( props ) => {
  const { loadedItem } = props.item1;
    const [activeTab, setActiveTab] = useState('1');
    const [item_name, setItem_name] = useState('')
    const [description, setDescription] = useState('')
    const [features, setFeatures] = useState('')
    const [price, setPrice] = useState('')
    const [product_id, setProductId] = useState('')
    
    const history = useHistory();
  AdminBoard.propTypes = {
    addNewItem: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    item: PropTypes.func.isRequired
}
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    //On Form Add New Item Submit
    const onSubmitAddNewItem = ( e ) => {
        e.preventDefault();
        const newItem = {
            item_name,
            description,
            features,
            price
        }
      props.addNewItem( newItem )
      history.push("/")
    }
    //On Form Product Delete
    const onProductDelete = ( e ) => {
        e.preventDefault()
        props.deleteProduct(product_id)
    }
   
  
 
  
  
  
  
  
    return (
        <React.Fragment>
        <Container>
        
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              AddNew Product
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Edit/Delete Product
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              Sales Details
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                 
              <Form onSubmit={onSubmitAddNewItem} >
                  <FormGroup>
                      <Label>Item-Name</Label>
                      <Input type="text" name="item_name" placeholder="Enter Product Name"
                      onChange={e => setItem_name(e.target.value) } ></Input>
                  </FormGroup>
                  <FormGroup>
                      <Label>Description</Label>
                      <Input type="text" name="description" placeholder="Describe the Product"
                      onChange={e => setDescription(e.target.value) }></Input>
                  </FormGroup>
                  <FormGroup>
                      <Label>Features</Label>
                      <Input type="textarea" name="features" placeholder="Enter Product Features" 
                      onChange={e => setFeatures(e.target.value) }></Input>
                  </FormGroup>
                  <FormGroup>
                      <Label>Product Images</Label>
                      <Input type="file" name="item_images"></Input>
                  </FormGroup>
                  <FormGroup>
                      <Label>Price</Label>
                      <Input type="text" name="price" placeholder="Enter Product Price" onChange={e => setPrice(e.target.value) }></Input>
                  </FormGroup>
                  <Button className="btn btn-info" > Post Item</Button>

              </Form>
          
              </Col>
            </Row>
          </TabPane>
            <TabPane tabId="2">
              
              <Row>
                
               
              <Col sm="6">
                <Form onSubmit={onProductDelete}>
                <FormGroup>
                    <Label>Product Id</Label>
                    <Input type="text" name="product_id" placeholder="Enter Product Id" onChange={e => setProductId(e.target.value) }></Input>
                    
                
                </FormGroup>
                
                <Button className="btn btn-danger">Delete</Button>
                </Form>
              </Col>
              
            </Row>
          </TabPane>
          <TabPane  tabId="3">
          <Row>
          <Col sm='12'>
          <Table>
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        </Table>
          </Col>
          </Row>
          </TabPane>
        </TabContent>
        </Container>
            
        </React.Fragment>
    )
}
const mapStateToProps = ( state ) => ({
   item1: state.item 
})

export default connect(mapStateToProps, {addNewItem, deleteProduct,  edit})(AdminBoard)