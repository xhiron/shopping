import React from "react"
import "./SignIn.scss"
import FormInput from "../../components/form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
