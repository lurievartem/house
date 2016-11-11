import React, { PropTypes } from 'react';

const TextField = ({ type, placeholder, name, value, onChange, onBlur }) => (
    <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
    />
);

TextField.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
};

TextField.defaultProps = {
    type: 'text',
};

export default TextField;
