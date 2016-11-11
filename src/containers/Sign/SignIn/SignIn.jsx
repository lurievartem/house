import React, { PropTypes } from 'react';
import Modal from 'components/Modal';
import auth from '../../../../config/authentication';
import { FormField, TextField, Button } from 'components/FormCmpnt';
import { Facebook, Google } from 'components/SocialBtn';

const SignIn = ({ fields: { email, password }, show, close, submit, pureSubmit }) => (
    <Modal>
        <Modal.Header>
            <span>Log In</span>
        </Modal.Header>
        <Modal.Body>
            <form>
                <FormField labelText="Email">
                    <TextField placeholder="Email" {...email} />
                </FormField>
                <FormField labelText="Password">
                    <TextField type="password" placeholder="Password" {...password} />
                </FormField>
            </form>
            <div onClick={() => { show('FORGET'); }}>
                Forgot your username or password?
            </div>
            <div>
                <Facebook
                    receiveData={user => { pureSubmit({ user, type: 'facebook' }); }}
                    appId={auth.facebookID}
                />
                <Google
                    receiveData={user => { pureSubmit({ user, type: 'google' }); }}
                    appId={auth.googleID}
                />
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={close} text="Cancel" />
            <Button onClick={submit} text="Log in" />
        </Modal.Footer>
    </Modal>
);

SignIn.propTypes = {
    fields: PropTypes.object.isRequired,
    show: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    pureSubmit: PropTypes.func.isRequired
};

export default SignIn;
