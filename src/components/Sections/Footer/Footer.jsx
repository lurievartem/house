import React, { PropTypes } from 'react';

const Footer = ({ onContactClick }) => (
    <div>
        <div>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://google.com" target="_blank">Google</a>
            <a href="https://twitter.com/dneprfreek" target="_blank">Twitter</a>
        </div>
        <p onClick={onContactClick}>Contact us</p>
    </div>
);

Footer.propTypes = {
    onContactClick: PropTypes.func.isRequired
};

export default Footer;
