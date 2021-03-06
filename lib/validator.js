export const regexs = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    name: /^[a-zA-Z]{2,}$/
};

const isEmpty = value => value === undefined || value === null || value === '';

export function required(value){
    if(isEmpty(value)){
        return 'Required';
    }
}

export function minLength(min){
    return value => {
        if(!isEmpty(value) && value.length < min){
            return `Must be at least ${min} characters`;
        }
    };
}

export function maxLength(max){
    return value => {
        if(!isEmpty(value) && value.length > max){
            return `Must be no more than ${max} characters`;
        }
    };
}

export function match(field){
    return (value, data) => {
        if(data){
            if(value !== data[field]){
                return 'Do no match';
            }
        }
    };
}

export function email(value) {
    if(!isEmpty(value) && !regexs.email.test(value)){
        return 'Invalid email address';
    }
}

export function password(value){
    if(!isEmpty(value) && !regexs.password.test(value)){
        return 'Password invalid';
    }
}

export function isDate(value){
    if(!isEmpty(value) && !((value instanceof Date) &&
        (Object.prototype.toString.call(value) === '[object Date]'))){
        return 'Not date';
    }
}

export function isNumber(value){
    if(!isEmpty(value) && (isNaN(parseFloat(value)) || !isFinite(value))){
        return 'Not number';
    }
}

export function isValid(errors){
    return !Object.keys(errors).length;
}

export function create(rules){
    return (data = {}) => {
        const errors = {};
        Object.keys(rules).forEach(key => {
            [].concat(rules[key]).some((rule) => {
                const error = rule(data[key], data);
                if(error){
                    errors[key] = error;
                    return true;
                }
                return false;
            });
        });
        return errors;
    };
}
