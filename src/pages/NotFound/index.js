import React from 'react'
import './style.less'

export default class NotFound extends React.Component{
    render() {
        return (
            <div className="not-found-page">
                <div className="container">
                    <div className="page-title">
                        Page not found
                    </div>
                </div>
            </div>
        )
    }
}