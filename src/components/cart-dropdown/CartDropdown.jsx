import React from "react"
import { connect } from "react-redux"
import "./CartDropdown.scss"
import CustomButton from "../custom-button/CustomButton"
import Cart from "../cart/Cart"
import { selectCartItems } from "../../redux/cart/cart.selectors"

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <Cart key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown)
