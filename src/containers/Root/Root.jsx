import React, { PropTypes } from 'react';

const Root = ({ children }) => (
    <div>
        {children}
    </div>
);

Root.propTypes = {
    children: PropTypes.node.isRequired
};

export default Root;
