import React, { PropTypes } from 'react';

const FormField = ({ labelText, children, errorClassName }) => (
    <div className="form-field">
        {labelText && <label>{labelText}</label>}
        {children}
        {children.props.touched && children.props.error &&
            <div className={errorClassName}>{children.props.error}</div>}
    </div>
);

FormField.propTypes = {
    labelText: PropTypes.string,
    children: PropTypes.node,
    errorClassName: PropTypes.string
};

FormField.defaultProps = {
    errorClassName: 'has-error'
};

export default FormField;
