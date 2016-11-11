import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { reduxForm } from 'redux-form';

function signWrapper(ChildComponent, { form: { name, formFields, validate }, submit }){
    class WrapperComponent extends Component{
        static propTypes = {
            showModal: PropTypes.func.isRequired,
            closeModal: PropTypes.func.isRequired,
            fields: PropTypes.object.isRequired,
            handleSubmit: PropTypes.func.isRequired,
            submit: PropTypes.func.isRequired
        };

        constructor(props){
            super(props);

            this.show = this.show.bind(this);
            this.close = this.close.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }

        onSubmit(values){
            return new Promise((resolve, reject) => {
                const errors = validate(values);
                if(Object.keys(errors).length !== 0) return reject(errors);

                return this.props.submit({
                    user: values,
                    type: 'local',
                    resolve,
                    reject
                });
            });
        }

        show(modalName){
            this.props.showModal(modalName);
        }

        close(){
            this.props.closeModal();
        }

        render(){
            const { handleSubmit, fields } = this.props;

            return(
                <ChildComponent
                    show={this.show}
                    close={this.close}
                    fields={fields}
                    submit={handleSubmit(this.onSubmit)}
                    pureSubmit={this.props.submit}
                />
            );
        }
    }

    const enhance = compose(
        connect(
            null,
            dispatch => bindActionCreators({ submit }, dispatch)
        ),
        reduxForm({
            form: name,
            fields: formFields
        })
    );

    return enhance(WrapperComponent);
}


export default signWrapper;
