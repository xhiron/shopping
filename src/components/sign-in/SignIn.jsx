import React from "react"
import { connect } from "react-redux"
import FormInput from "../../components/form-input/FormInput"
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.action"
import CustomButton from "../custom-button/CustomButton"
import "./SignIn.scss"

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
    const { emailSignInStart } = this.props
    const { email, password } = this.state
    emailSignInStart(email, password)
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props
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
            <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDisPatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDisPatchToProps)(SignIn)
