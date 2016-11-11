import { isValid as check, create, required, email, minLength, password, match }
    from '../../lib/validator';

const fieldRules = {
    email: [required, email],
    password: [required, minLength(5), password],
    confirmPassword: [required, minLength(5), password, match('password')],
    name: [required, minLength(2)],
    lastname: [required, minLength(2)],
    gender: [required],
    birthday: [required]
};

const validationTypeFields = {
    signin: ['email', 'password'],
    signup: ['email', 'password', 'confirmPassword', 'name', 'lastname', 'gender', 'birthday'],
    passrecovery: ['email']
};

export function validate(type){
    const fields = validationTypeFields[type];
    const validateObj = fields.reduce((obj, field) => {
        if(fieldRules[field]){
            obj[field] = fieldRules[field];
        }
        return obj;
    }, {});

    return create(validateObj);
}

export function isValid(type, data){
    return (type || check(validate(type)(data)));
}
