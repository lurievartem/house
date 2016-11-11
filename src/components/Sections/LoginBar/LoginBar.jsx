import React, { PropTypes } from 'react';

const LoginBar = ({ onSignInClick, onSignOutClick, onSignUpClick, isAuthenticated }) => (
    <span>
        {isAuthenticated
            ? <span onClick={onSignOutClick}> Sign out </span>
            : [<span key="signin" id="signin" onClick={onSignInClick}> Sign in </span>,
                <span key="signup" id="signup" onClick={onSignUpClick}> Sign up </span>]
        }
    </span>
);

LoginBar.propTypes = {
    onSignInClick: PropTypes.func.isRequired,
    onSignOutClick: PropTypes.func.isRequired,
    onSignUpClick: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default LoginBar;
