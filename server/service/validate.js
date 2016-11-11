import { isValid } from '../../src/api/validatorApi';

const validate = type => (req, res, next) => {
    if(!isValid(type, req.body.user)){
        next(new Error('not valid data'));
    }

    next();
};

export default validate;
