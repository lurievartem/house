import signWrapper from './SignWrapper';
import { validate } from '../../api/validatorApi';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import RecoveryPassword from './RecoveryPassword/RecoveryPassword';
import { signIn, signUp, passRecovery } from './SignActions';

const Sign = {
    In: signWrapper(SignIn, {
        form: {
            name: 'SignIn',
            formFields: ['email', 'password'],
            validate: validate('signin')
        },
        submit: signIn
    }),
    Up: signWrapper(SignUp, {
        form: {
            name: 'SignUp',
            formFields: ['email', 'password', 'confirmPassword', 'name',
                        'lastname', 'gender', 'birthday', 'logo'],
            validate: validate('signup')
        },
        submit: signUp
    }),
    Forget: signWrapper(RecoveryPassword, {
        form: {
            name: 'Forget',
            formFields: ['email'],
            validate: validate('passrecovery')
        },
        submit: passRecovery
    })
};

export default Sign;
