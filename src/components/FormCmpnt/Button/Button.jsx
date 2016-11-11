import React, { PropTypes } from 'react';

const Button = ({ onClick, type, text, className, ...rest }) => (
    <button
        type={type}
        className={className}
        onClick={onClick}
        {...rest}
    >
        {text}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
};

Button.defaultProps = {
    className: 'btn'
};

export default Button;
