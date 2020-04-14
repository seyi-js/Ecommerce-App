import React, { Component } from 'react'

export class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="checkout-left">	
				<div className="checkout-left-basket animated wow slideInLeft" data-wow-delay=".5s">
					<h4>Continue to basket</h4>
					<ul>
						<li>Product1 <i>-</i> <span>$250.00 </span></li>
						<li>Product2 <i>-</i> <span>$290.00 </span></li>
						<li>Product3 <i>-</i> <span>$299.00 </span></li>
						<li>Total Service Charges <i>-</i> <span>$15.00</span></li>
						<li>Total <i>-</i> <span>$854.00</span></li>
					</ul>
				</div>
				<div className="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
					<a href="single.html"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Continue Shopping</a>
				</div>
				<div className="clearfix"> </div>
			</div>
            </React.Fragment>
        )
    }
}

export default Checkout
