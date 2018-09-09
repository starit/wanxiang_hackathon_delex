import React from 'react'
import './style.less'

export default class TransactionAction extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            view: 'sell'
        }
    }

    changeView(view){
        this.setState({
            view: view
        })
    }

    render() {
        const SellView = <div>
            <div className="transaction-sell-view">
                <div className="transaction-item">
                    <span className="transaction-title">Available Balance</span>
                    <span className="transaction-value">1000<span className="transanction-unit">KWH</span></span>
                </div>
                <div className="transaction-item bg-gray">
                    <span className="transaction-title">Sell Amount</span>
                    <span className="transaction-value"><input type="text" className="pure-input"/> <span
                        className="transanction-unit">KWH</span></span>
                </div>
                <div className="transaction-item bg-gray">
                    <span className="transaction-title">Price/KWH</span>
                    <span className="transaction-value"><input type="text" className="pure-input"/> <span
                        className="transanction-unit">CNY</span></span>
                </div>
                <div className="transaction-item">
                    <span className="transaction-title">Market Price/KWH</span>
                    <span className="transaction-value">1000<span className="transanction-unit">CNY</span></span>
                </div>
                <div className="transaction-btn container">
                    <button className="btn btn-delex">Create Sell Order</button>
                </div>
            </div>
        </div>

        const BuyView = <div>
            <div className="transaction-sell-view">
                <div className="transaction-item bg-gray">
                    <span className="transaction-title">Buy Amount</span>
                    <span className="transaction-value"><input type="text" className="pure-input"/> <span
                        className="transanction-unit">KWH</span></span>
                </div>
                <div className="transaction-item bg-gray">
                    <span className="transaction-title">Total Payment</span>
                    <span className="transaction-value"><input type="text" className="pure-input"/> <span
                        className="transanction-unit">CNY</span></span>
                </div>
                <div className="transaction-item">
                    <span className="transaction-title">Market Price/KWH</span>
                    <span className="transaction-value">0.9<span className="transanction-unit">CNY</span></span>
                </div>
                <div className="transaction-btn container">
                    <button className="btn btn-delex">Buy</button>
                </div>
            </div>
        </div>
        return (
            <div className="component-transaction-action component">
                <div className="component-switch">
                    <div className={(this.state.view === 'sell' ? 'active ' : '') + 'transaction-sell'} onClick={this.changeView.bind(this, 'sell')}>Sell</div>
                    <div className={(this.state.view === 'buy' ? 'active ' : '') + 'transaction-buy'} onClick={this.changeView.bind(this, 'buy')}>Buy</div>
                </div>
                {this.state.view === 'buy' ? BuyView : SellView}
            </div>
        )
    }
}