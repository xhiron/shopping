import React from "react"
import "./SignIn.scss"
import FormInput from "../../components/form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    } catch (error) {
      console.error(error)
    }
    this.setState({ email: "", password: "" })
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label="email" handleChange={this.handleChange} type="email" name="email" value={this.state.email} required />
          <FormInput label="password" handleChange={this.handleChange} type="password" name="password" value={this.state.password} required />
          <div className="buttons">
            <CustomButton onClick={this.handleSubmit} type="submit">
              Sign In
            </CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
