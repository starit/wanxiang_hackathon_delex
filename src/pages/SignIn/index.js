import React from 'react';
import './style.less';
import SignIn from '@/components/SignIn'

export default class SignInPage extends React.Component {
    render() {
        return (
            <div className="sign-in-page container">
                <span className="icon icon-logo-big"/>
                <SignIn/>
            </div>
        )
    }
}