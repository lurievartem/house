import React, { Component, PropTypes } from 'react';

class Facebook extends Component{
    static propTypes = {
        appId: PropTypes.string.isRequired,
        receiveData: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /* eslint-disable no-undef */
    componentDidMount(){
        window.fbAsyncInit = () => {
            FB.init({
                appId: this.props.appId,
                cookie: true,
                xfbml: true,
                version: 'v2.1'
            });
        };

        // Load the Facebbok SDK asynchronously
        ((d, s, id) => {
            const fjs = d.getElementsByTagName(s)[0];
            if(d.getElementById(id)) return;

            const js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';

            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    statusChangeCallback(data){
        if(data.status === 'connected'){
            FB.api('/me', { fields: 'id, first_name, last_name, email' }, res => {
                const user = {
                    id: res.id,
                    name: res.first_name,
                    lastname: res.last_name,
                    email: res.email
                };
                this.props.receiveData(user);
            });
        }
    }

    checkLoginState(){
        FB.getLoginStatus(res => this.statusChangeCallback(res));
    }

    handleClick(){
        FB.login(this.checkLoginState(), { scope: 'public_profile, email' });
    }

    /* eslint-enable no-undef */

    render(){
        return(
            <a href="#" onClick={this.handleClick}>Facebook</a>
        );
    }
}

export default Facebook;
