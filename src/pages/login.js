import React, { Component } from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'
// import { AUTH_TOKEN } from '../constants'

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  render() {
    const { login, email, password, name } = this.state
    return (
      <Layout>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          {/* <div className="pointer mr2 button" onClick={() => this._confirm()}>
            {login ? 'login' : 'create account'}
          </div> */}
          <Link to="/home">Login</Link>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </Layout>
    )
  }

  _confirm = async () => {
    // ... you'll implement this 🔜
  }

  _saveUserData = token => {
    // localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login