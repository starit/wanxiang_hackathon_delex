import React from 'react'
import './style.less'

export default class MyDevices extends React.Component{
    componentDidMount(){
        /*EOSJS*/

    }
    render() {
        return (
            <div className="component-my-devices component">
                <div className="component-title">My Generators</div>
                <div className="devices-blocks">
                    <div className="device-item">
                        <img src="/static/img/generator-1.png" alt="generator"/>
                    </div>
                    <div className="device-item">
                        <img src="/static/img/generator-2.png" alt="generator"/>
                    </div>
                    <div className="device-item">
                        <img src="/static/img/generator-3.png" alt="generator"/>
                    </div>
                </div>
            </div>
        )
    }
}