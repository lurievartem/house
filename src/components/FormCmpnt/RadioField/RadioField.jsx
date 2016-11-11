import React, { Component, PropTypes, Children, cloneElement } from 'react';

class Group extends Component{
    static propTypes = {
        children: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        defaultSelected: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    };

    componentWillMount(){
        this.props.onChange(this.props.defaultSelected);
    }

    render(){
        const { children, name, onChange, onBlur, value } = this.props;
        return(
            <div>
                {Children.map(children,
                    child => cloneElement(child, { name, onChange, onBlur, fieldValue: value }))}
            </div>
        );
    }
}

const RadioField = ({ id, label, value, name, onChange, onBlur, fieldValue }) => (
    <label htmlFor={id}>
        <input
            type="radio"
            id={id}
            value={value}
            name={name}
            checked={value === fieldValue}
            onChange={onChange}
            onBlur={onBlur}
        />
        {label}
    </label>
);

RadioField.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    fieldValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

RadioField.Group = Group;

export default RadioField;
