import React, { PropTypes } from 'react';
import Modal from 'components/Modal';
import { FormField, TextField, RadioField, DateField, FileField,
    Button } from 'components/FormCmpnt';

const SignUp = ({ fields, show, close, submit }) => {
    const { email, password, confirmPassword, name, lastname, gender, birthday, logo } = fields;
    return(
        <Modal>
            <Modal.Header>
                <span>Creaqte a new account</span>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <FormField labelText="Email">
                        <TextField placeholder="Email" {...email} />
                    </FormField>
                    <FormField labelText="Password">
                        <TextField type="password" placeholder="Password" {...password} />
                    </FormField>
                    <FormField labelText="Confirm Password">
                        <TextField
                            type="password"
                            placeholder="Confirm Password"
                            {...confirmPassword}
                        />
                    </FormField>
                    <FormField labelText="Name">
                        <TextField type="text" placeholder="Name" {...name} />
                    </FormField>
                    <FormField labelText="Lastname">
                        <TextField type="text" placeholder="Lastname" {...lastname} />
                    </FormField>
                    <FormField labelText="Gender">
                        <RadioField.Group {...gender} defaultSelected="0">
                            <RadioField id="men" label="Men" value="1" />
                            <RadioField id="women" label="Women" value="2" />
                            <RadioField id="undefined" label="Not specified" value="0" />
                        </RadioField.Group>
                    </FormField>
                    <FormField labelText="Date of birth">
                        <DateField placeholder="Date of birth" {...birthday} />
                    </FormField>
                    <FormField labelText="Logo">
                        <FileField {...logo} multiple={false} />
                    </FormField>
                </form>
                <div>
                    Already registered?
                    <span onClick={() => { show('SIGN_IN'); }}>Log in</span>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={close} text="Cancel" />
                <Button onClick={submit} text="Create account" />
            </Modal.Footer>
        </Modal>
    );
};

SignUp.propTypes = {
    fields: PropTypes.object.isRequired,
    show: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
};

export default SignUp;
