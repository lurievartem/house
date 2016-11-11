import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavItem = ({ children, to }) => (
    <Link to={to}>
        {children}
    </Link>
);

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default NavItem;
