import React from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './styles.scss'

import { signupSuccess, signupFailure } from '../../actions/auth/signup';

class Signup extends React.Component {

    state = {
        email: '',
        name: '',
        password: '',
    }

    onChange = (name) => (event) => {
        const { value } = event.target;
        if (name === 'email') {
            this.setState({ emailHelper: false });
        }
        if (name === 'name') {
            this.setState({ nameHelper: false });
        }
        if (name === 'password') {
            this.setState({ passwordHelper: false });
        }
        this.setState({ [name]: value });
    }

    submit = async () => {
        const { name, email, password } = this.state;
        const { actionSignupSuccess, actionSignupFailure } = this.props;
        try {

            const body = {
                name: name,
                email: email,
                password: password,
            }
            actionSignupSuccess({ body })

            // now signin to continue
            alert('Signup successful, now login to continue')

        } catch (error) {
            console.log(error)
            await actionSignupFailure({ error })
        }
    }

    render() {

        const { name, email, password } = this.state

        return (
            <form action="#">
                <h1 className="head">Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Username"
                    required
                    value={name}
                    label='Username'
                    onChange={this.onChange('name')}
                />

                <input type="email" placeholder="Email"
                    required
                    value={email}
                    label='Email'
                    onChange={this.onChange('email')}
                />

                <input type="password" placeholder="Password"
                    required
                    value={password}
                    label='Password'
                    onChange={this.onChange('password')}
                />
                <button onClick={this.submit} >Sign Up </button>
            </form>
        )
    }
}

Signup.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispachToProps = (dispatch) => bindActionCreators({
    actionSignupSuccess: signupSuccess,
    actionSignupFailure: signupFailure,
}, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(Signup)