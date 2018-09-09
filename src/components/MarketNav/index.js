import React from 'react'
import './style.less'

export default class MarketNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            view: 'sellOrders'
        }
    }
    changeMarketView(view){
        this.setState({
            view: view
        })
        this.props.changeMarketView(view)
    }
    render(){
        return (
            <div className="container">
                <div className="market-nav">
                    <div className={(this.state.view === 'sellOrders' ? 'active ': '') + 'market-nav-item'} onClick={this.changeMarketView.bind(this, 'sellOrders')}>Sell Orders</div>
                    <div className={(this.state.view === 'trade' ? 'active ': '') + 'market-nav-item'} onClick={this.changeMarketView.bind(this, 'trade')}>Trade</div>
                </div>
            </div>
        )
    }
}