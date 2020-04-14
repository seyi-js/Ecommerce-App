import React, { Component } from 'react';
import { getItems, getItem, addToCart } from '../actions/itemActions';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom';
import Chart from '../components/chart'

export class Collections extends Component {
	//Proptypes
	static propTypes = {
	getItems: propTypes.func.isRequired

	}
	

	//Get Items onLoad
	componentDidMount() {
	this.props.getItems();
	}

	// Add to Cart
	addTocart = ( id ) => {
	
		
		
	this.props.addToCart(id)


		}

		render() {

			const { items, loading} = this.props.item;
			

			
		const spinner = (
		<React.Fragment>
			<Container>
				<Spinner type="grow" color="primary" />
					<Spinner type="grow" color="primary" />
					</Container>

				</React.Fragment>

				)

				const notLoading = (
				<React.Fragment>
					<Router>

						<Container className="text-center">
							<Row>

								{ items.map( ( { _id, item_name, item_images, price, posted_by,
								posted_date
								} ) => (

								<Col>
								<div className="" key={_id}>


									<img src='../images/10.jpg' className="img-responsive" />
									<h3>{ item_name }</h3>
									<h4>{ price }</h4>
									<p>Posted by <a herf="/">{ posted_by }</a></p>
									<button className="btn btn-info" onClick={this.addTocart.bind(this,
										_id)}>Add To Cart</button> 


								</div>
							</Col>

							))}




						</Row>
					</Container>
				</Router>
				}

			</React.Fragment>
			)
			return (

			<React.Fragment>
				<div className="mt-10" style={{marginTop: '100px'}}>
					{ loading ? spinner :


					notLoading


					}
				</div>
			</React.Fragment>


			)
			}
			}

			const mapStateToProps = (state) =>({
			item: state.item,
			})

			export default connect(mapStateToProps, {getItems, addToCart})(Collections);
