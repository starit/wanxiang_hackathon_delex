import React from 'react'
import './style.less'

export default class SellOrders extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sellOrdersData: [
                {

                }
            ]
        }
    }
    render(){
        return(
            <div className="component-sell-orders component">
                <div className="sell-order-item">
                    <div className="seller-name">electricityseller</div>
                    <div className="sell-info">
                        <div className="sell-amount">
                            <div className="sell-num">100</div>
                            <div className="sell-unit">Amount (kW·h)</div>
                        </div>
                        <div className="sell-price">
                            <div className="sell-num">0.9</div>
                            <div className="sell-unit">Price (CNY/KWH)</div>
                        </div>
                        <div className="sell-btn">
                            <button className="btn">BUY</button>
                        </div>
                    </div>
                </div>

                <div className="sell-order-item">
                    <div className="seller-name">meeeooooon</div>
                    <div className="sell-info">
                        <div className="sell-amount">
                            <div className="sell-num">100</div>
                            <div className="sell-unit">Amount (kW·h)</div>
                        </div>
                        <div className="sell-price">
                            <div className="sell-num">0.9</div>
                            <div className="sell-unit">Price (CNY/KWH)</div>
                        </div>
                        <div className="sell-btn">
                            <button className="btn">BUY</button>
                        </div>
                    </div>
                </div>

                <div className="sell-order-item">
                    <div className="seller-name">edison</div>
                    <div className="sell-info">
                        <div className="sell-amount">
                            <div className="sell-num">100</div>
                            <div className="sell-unit">Amount (kW·h)</div>
                        </div>
                        <div className="sell-price">
                            <div className="sell-num">0.9</div>
                            <div className="sell-unit">Price (CNY/KWH)</div>
                        </div>
                        <div className="sell-btn">
                            <button className="btn">BUY</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}