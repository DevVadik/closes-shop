import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartIrems,cartTotalPrice}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartIrems.map(cartItem => {
          return(
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          )
        })
      }
      <div className="total">
    <span>TOTAL : $ {cartTotalPrice}</span>
      </div>
 
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartIrems: selectCartItems,
  cartTotalPrice: selectCartTotal
})

export default connect(
  mapStateToProps,
  null
)(CheckoutPage)
