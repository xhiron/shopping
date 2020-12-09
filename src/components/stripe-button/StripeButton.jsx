import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token)
    alert("Payment successful")
  }
  const priceForStripe = price * 100
  const publishableKey = "pk_test_51HD64KKn3PO8bqR5y7RWJ5TkV4xb0kAsMWUD45mafmSfMZTIS1kgWjSwauJwyB0Z8Q3CT41eYELyTNkixOwqbchw00quzfaoeA"
  return (
    <StripeCheckout
      label="Pay now"
      name="Shopping app Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
