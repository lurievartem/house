import authentication from './authentication';
import passRecovery from './passRecovery';
import webpack from './webpack';
import errors from './errors';

export default (app) => {
    app.use(authentication);
    app.use(passRecovery);
    app.use(webpack);
    app.use(errors);
};
