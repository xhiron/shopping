import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import "./CartDropdown.scss"
import CustomButton from "../custom-button/CustomButton"
import Cart from "../cart/Cart"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect"
import { toggleCartHidden } from "../../redux/cart/cart.action"

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => <Cart key={cartItem.id} item={cartItem} />)
      ) : (
        <span className="empty-massage">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout")
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
