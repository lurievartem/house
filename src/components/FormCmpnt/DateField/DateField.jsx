import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './react-datepicker.css';

const DateField = ({ placeholder, ...birthday }) => (
    <DatePicker
        {...birthday}
        placeholderText={placeholder}
        dateFormat="MM/DD/YY"
        selected={birthday.value ? moment(birthday.value) : null}
    />
);

DateField.propTypes = {
    placeholder: PropTypes.string
};

export default DateField;
