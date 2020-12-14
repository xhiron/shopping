import React from "react"
import { connect } from "react-redux"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import { signUpStart } from "../../redux/user/user.action"
import CustomButton from "../custom-button/CustomButton"
import FormInput from "../form-input/FormInput"
import "./SignUp.scss"
class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }

  handleSubmit = async (event) => {
    const { signUpStart } = this.props
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("passwords dont match")
      return
    }
    signUpStart({ displayName, email, password })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form
          className="sign-up-form"
          onSubmit={() => {
            console.log("test")
          }}
        >
          <FormInput label="displayName" required onChange={this.handleChange} type="text" name="displayName" value={displayName} />
          <FormInput label="email" required onChange={this.handleChange} type="email" name="email" value={email} />
          <FormInput label="password" required onChange={this.handleChange} type="password" name="password" value={password} />
          <FormInput label="Confirm password" required onChange={this.handleChange} type="password" name="confirmPassword" value={confirmPassword} />
          <CustomButton type="submit" onClick={this.handleSubmit}>
            SIGN UP
          </CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)
