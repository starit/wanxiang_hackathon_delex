import React from 'react'
import eos from '@/eos'
import {browserHistory} from 'react-router'
import './style.less'

export default class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            accountName: typeof window !== 'undefined' && localStorage.getItem('accountName'),
            CNYTBalance: 0
        }
    }

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    logOut(){
        if(typeof window !== 'undefined'){
            localStorage.clear()
            browserHistory.push('sign-in')
        }
    }

    componentDidMount(){
        eos.getCNYTBalance().then(res => {
            this.setState({
                CNYTBalance: res
            })
        })
    }

    render() {
        return (
            <div className="page-banner">
                <div className="container">
                    <div className="logo">
                        <span className="icon icon-logo"/>
                    </div>
                    <div className="account-name" onClick={this.toggleMenu.bind(this)}>
                        <span className="account-avatar">{this.state.accountName && this.state.accountName.slice(0,1)}</span>{this.state.accountName}
                    </div>
                    {this.state.showMenu && <ul className="menu">
                        <li>￥{this.state.CNYTBalance}</li>
                        <li onClick={this.logOut.bind(this)}>Log out</li>
                    </ul>}
                </div>
                {this.props.children}
            </div>
        )
    }
}