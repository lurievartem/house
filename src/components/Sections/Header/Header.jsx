import React, { PropTypes } from 'react';
import { NavBar, NavItem, LoginBar } from 'components/Sections';

const Header = ({ onSignInClick, onSignOutClick, onSignUpClick, isAuthenticated }) => (
    <div>
        <NavBar>
            <NavItem to="/">Home</NavItem>
            <NavItem to="about">Bout</NavItem>
            <NavItem to="/as">NotFound</NavItem>
        </NavBar>
        <LoginBar
            onSignInClick={onSignInClick}
            onSignOutClick={onSignOutClick}
            onSignUpClick={onSignUpClick}
            isAuthenticated={isAuthenticated}
        />
    </div>
);

Header.propTypes = {
    onSignInClick: PropTypes.func.isRequired,
    onSignOutClick: PropTypes.func.isRequired,
    onSignUpClick: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
