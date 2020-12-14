import React from "react"
import { connect } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"
import { createStructuredSelector } from "reselect"
import "./App.css"
import Header from "./components/header/Header"
import CheckoutPage from "./pages/checkout/Checkout"
import { HomePage } from "./pages/homepage/Homepage"
import ShopPage from "./pages/shop/Shop"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp"
import { selectCollectionsPreview } from "./redux/shop/shop.selector"
import { checkUserSession } from "./redux/user/user.action"
import { selectCurrentUser } from "./redux/user/user.selector"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
  }

  unsubscribeFromAuth = null

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsPreview,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
