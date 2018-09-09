import React from 'react'
import './style.less'

export default class MyPower extends React.Component{
    componentDidMount(){
        /*EOSJS*/

    }
    render() {
        return (
            <div className="component-my-power component">
                <div className="component-title">My Usage</div>
                <div className="power-graph">
                    <img src="/static/img/chart.png" alt="power-chart"/>
                </div>
            </div>
        )
    }
}