import React from 'react'
import './style.less'

export default class LoadingPage extends React.Component {
    render() {
        return (
            <div className="container loading-page">
                <img src="/static/img/loading/spinner.gif" className="loading-img" alt="loading-img"/>
            </div>
        )
    }
}