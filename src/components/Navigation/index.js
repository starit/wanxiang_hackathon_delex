import React from 'react'
import {Link, IndexLink} from 'react-router'
import './style.less'

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <div className="navigation-item"><IndexLink to='/' activeClassName='active'>Dashboard</IndexLink></div>
                <div className="navigation-item"><Link to='/market' activeClassName='active'>Market</Link></div>
            </div>
        )
    }
}