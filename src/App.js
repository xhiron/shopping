import "./App.css"
import { HomePage } from "./pages/homepage/Homepage"
import ShopPage from "./pages/shop/Shop"
import { Switch, Route } from "react-router-dom"
import Header from "./components/header/Header"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp"
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}

export default App
