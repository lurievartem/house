import React, { PropTypes } from 'react';
import './Modal.scss';

const Modal = ({ children, className }) => (
    <div>
        <div className={className}>
            <div className="modal-guts">
                {children}
            </div>
        </div>
        <div className="modal-overlay" id="modal-overlay"></div>
    </div>
);

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Modal.defaultProps = {
    className: 'modal'
};

const ModalHeader = ({ children, className }) => (
    <div className={className}>
        {children}
    </div>
);

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

ModalHeader.defaultProps = {
    className: 'modal-header'
};

const ModalBody = ({ children, className }) => (
    <div className={className}>
        {children}
    </div>
);

ModalBody.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

ModalBody.defaultProps = {
    className: 'modal-body'
};

const ModalFooter = ({ children, className }) => (
    <div className={className}>
        {children}
    </div>
);

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

ModalFooter.defaultProps = {
    className: 'modal-footer'
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
