import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal, hideModal } from './ModalActions';
import Sign from '../Sign/Sign';

const MODAL_COMPONENTS = {
    SIGN_IN: Sign.In,
    SIGN_UP: Sign.Up,
    FORGET: Sign.Forget,
};

@connect(
    state => ({ modal: state.modal }),
    dispatch => bindActionCreators({ showModal, hideModal }, dispatch)
)
class ModalCtnr extends Component{
    static propTypes = {
        modal: PropTypes.object.isRequired,
        showModal: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    showModal(name){
        if(name && MODAL_COMPONENTS[name]){
            this.closeModal();
            this.props.showModal(name);
        }
    }

    closeModal(){
        const { modal: { modalProps } } = this.props;
        if(modalProps && modalProps.onCloseModal && typeof modalProps.onCloseModal === 'function'){
            modalProps.onCloseModal();
        }
        this.props.hideModal();
    }

    render(){
        const { modal: { modalType, modalProps } } = this.props;
        if(!modalType && !MODAL_COMPONENTS[modalType]) return <span />;

        const Modal = MODAL_COMPONENTS[modalType];
        return <Modal {...modalProps} closeModal={this.closeModal} showModal={this.showModal} />;
    }
}

export default ModalCtnr;
