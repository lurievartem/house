import React, { Component, PropTypes } from 'react';

class Google extends Component{
    static propTypes = {
        appId: PropTypes.string.isRequired,
        receiveData: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        /* eslint-disable no-undef */
        window.renderButton = () => {
            gapi.load('auth2', () => {
                window.gauth = gapi.auth2.init({
                    client_id: this.props.appId,
                    cookiepolicy: 'single_host_origin'
                });
            });
        };

        const intervalId = setInterval(() => {
            const btn = document.getElementById('g-signin2');
            if(window.gauth && btn){
                window.gauth.attachClickHandler(btn, {}, this.handleClick);
                clearInterval(intervalId);
            }
        }, 0);
        /* eslint-enable no-undef */

        // Load the Google SDK asynchronously
        ((d, s, id) => {
            const fjs = d.getElementsByTagName(s)[0];
            if(d.getElementById(id)) return;

            const js = d.createElement(s);
            js.id = id;
            js.src = '//apis.google.com/js/api:client.js?onload=renderButton';

            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'google-jssdk');
    }

    handleClick(googleUser){
        const profile = googleUser.getBasicProfile();
        const user = {
            id: profile.Eea,
            name: profile.ofa,
            lastname: profile.wea,
            email: profile.U3
        };
        this.props.receiveData(user);
    }

    render(){
        return(
            <a id="g-signin2" href="#">Google</a>
        );
    }
}

export default Google;
