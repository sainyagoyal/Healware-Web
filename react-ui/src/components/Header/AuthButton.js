import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signout } from '../../actions/auth/signout.js'

class AuthButton extends React.Component {

    logout = () => {
        const { actionSignout } = this.props
        actionSignout()
    }

    render() {

        const { user } = this.props
        const { isSignedIn } = user

        return (
            <span onClick={this.logout} >
                {
                    isSignedIn ? 'Logout' : 'Login'
                }
            </span>
        )
    }
}

AuthButton.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispachToProps = (dispatch) => bindActionCreators({
    actionSignout: signout
}, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(AuthButton)