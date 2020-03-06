import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { withRouter } from "react-router";

import CartDropdown from "./cart-dropdown.component";
import { selectCartItems } from "./../../redux/cart/cart.selectors";

const mapStateToProps = createStructuredSelector({
  cartItems: state => selectCartItems(state)
});

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(CartDropdown);

export default CartDropdownContainer;
