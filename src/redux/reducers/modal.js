import { SHOW_MODAL, HIDE_MODAL } from 'containers/ModalCtnr/ModalActions';

export default (state = { modalType: null, modalProps: {} }, action) => {
    switch(action.type){
        case SHOW_MODAL:
            return { ...state, modalType: action.modalType, modalProps: action.modalProps };
        case HIDE_MODAL:
            return { ...state, modalType: action.modalType, modalProps: {} };
        default:
            return state;
    }
};
