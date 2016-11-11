import React, { PropTypes } from 'react';
import Modal from 'components/Modal';
import { FormField, TextField, Button } from 'components/FormCmpnt';

const RecoveryPassword = ({ fields: { email }, show, close, submit }) => (
    <Modal>
        <Modal.Header>
            <span>Retrieve accounts</span>
        </Modal.Header>
        <Modal.Body>
            Enter your email address to receive an email with a list of all
            accounts associated with this address.
            <form>
                <FormField labelText="Email">
                    <TextField placeholder="Email" {...email} />
                </FormField>
            </form>
            <div>
                <span onClick={() => { show('SIGN_UP'); }}> Create account</span> or
                <span onClick={() => { show('SIGN_IN'); }}> log in</span> instead
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={close} text="Cancel" />
            <Button onClick={submit} text="Submit" />
        </Modal.Footer>
    </Modal>
);

RecoveryPassword.propTypes = {
    fields: PropTypes.object.isRequired,
    show: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
};

export default RecoveryPassword;
