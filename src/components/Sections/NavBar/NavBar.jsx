import React, { PropTypes } from 'react';

const NavBar = ({ children }) => (
    <nav>
        {children}
    </nav>
);

NavBar.propTypes = {
    children: PropTypes.node.isRequired
};

export default NavBar;
