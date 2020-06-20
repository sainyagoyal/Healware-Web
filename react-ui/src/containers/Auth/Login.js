import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss'
import { signinSuccess, signinFailure } from '../../actions/auth/login'

class Login extends React.Component {

    state = {
        username: '',
        password: '',
    }

    onChange = (name) => (event) => {
        const { value } = event.target;
        this.setState({ [name]: value });
    }

    submit = async (event) => {
        const { user, actionSigninFailure, actionSigninSuccess } = this.props
        try {
            event.preventDefault();
            const { username, password } = this.state;
            console.log(user)

            if (username === user.name && password === user.password) {
                const body = {
                    name: username,
                    password: password,
                }
                actionSigninSuccess({ body });
                alert('Signin successful')
                window.location = '/'
            } else {
                const error = 'invalid credentials'
                console.error(error)
                alert(error)
                throw error
            }

        } catch (error) {
            console.error(error)
            actionSigninFailure({ error });
        }
    }

    render() {

        const { username, password } = this.state

        return (
            <form action="#">
                <h1 className="head">Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Username"
                    required
                    value={username}
                    label='Username'
                    onChange={this.onChange('username')}
                />
                <input type="password" placeholder="Password"
                    required
                    type='password'
                    value={password}
                    label='Password'
                    onChange={this.onChange('password')}
                />
                <a href="#">Forgot your password?</a>
                <button onClick={this.submit} > Sign In </button>
            </form>
        )
    }
}


Login.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispachToProps = (dispatch) => bindActionCreators({
    actionSigninSuccess: signinSuccess,
    actionSigninFailure: signinFailure,
}, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(Login)