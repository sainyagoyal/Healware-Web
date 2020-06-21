import React from 'react'

import Login from './Login.js'
import Signup from './Signup.js'
import './styles.scss'

class Desktopview extends React.Component {

    openLogin = () => {
        console.log('Login screen')
        const container = document.getElementById('container');
        container.classList.remove('right-panel-active');
    }

    openSignup = () => {
        console.log('Signup screen')
        const container = document.getElementById('container');
        container.classList.add('right-panel-active');
    }

    render() {

        return (
            <div className="containerParent" id="container">
                <div className="form-container sign-up-container">
                    <Signup />
                </div>
                <div className="form-container sign-in-container">
                    <Login />
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
            </p>
                            <button className="ghost" id="signIn" onClick={this.openLogin}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={this.openSignup}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Desktopview