import React from 'react'
import './style.less'
import eos from '@/eos'

export default class Balance extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            balance: 0
        }
    }
    componentDidMount(){
        eos.getKWHBalance().then(res=>{
            this.setState({
                balance: res
            })
        })
    }
    render() {
        return (
            <div className="component-balance component">
                <div className="balance-title">Available Balance</div>
                <div className="balance-value">
                    {this.state.balance}
                    <span className="balance-unit">KWH</span>
                </div>
            </div>
        )
    }
}