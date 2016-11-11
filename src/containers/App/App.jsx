import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Footer } from 'components/Sections';
import { ModalCtnr } from 'containers';
import { showModal } from '../ModalCtnr/ModalActions';
import { openChat } from '../Chat/ChatActions';
import { signOut } from '../Sign/SignActions';
import { getAuthenticatedStatus } from 'redux/reducers/auth';

@connect(
    state => ({ isAuthenticated: getAuthenticatedStatus(state) }),
    dispatch => bindActionCreators({
        showModal,
        openChat,
        signOut
    }, dispatch)
)
class App extends Component{
    static propTypes = {
        children: PropTypes.node.isRequired,
        showModal: PropTypes.func.isRequired,
        signOut: PropTypes.func.isRequired,
        openChat: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired
    };

    constructor(props){
        super(props);

        this.onSignInClick = this.onSignInClick.bind(this);
        this.onSignOutClick = this.onSignOutClick.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
        this.onContactClick = this.onContactClick.bind(this);
    }

    onSignInClick(){
        this.props.showModal('SIGN_IN');
    }

    onSignOutClick(){
        this.props.signOut();
    }

    onSignUpClick(){
        this.props.showModal('SIGN_UP');
    }

    onContactClick(){
        this.props.openChat();
    }

    render(){
        return(
            <div>
                <Header
                    onSignInClick={this.onSignInClick}
                    onSignOutClick={this.onSignOutClick}
                    onSignUpClick={this.onSignUpClick}
                    isAuthenticated={this.props.isAuthenticated}
                />
                <div>
                    {this.props.children}
                </div>
                <Footer onContactClick={this.onContactClick} />
                <ModalCtnr />
            </div>
        );
    }
}

export default App;
