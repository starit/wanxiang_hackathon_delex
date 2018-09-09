import React from 'react';
import Banner from '@/components/Banner'
import MyOrders from '@/components/MyOrders'
import Navigation from '@/components/Navigation'
import Transaction from "@/components/Transaction";
import SellOrders from '@/components/SellOrders'
import MarketNav from '@/components/MarketNav'
import './style.less'
import {browserHistory} from "react-router";


export default class Market extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'sellOrders'
        }
    }

    componentWillMount(){
        if(typeof window !== 'undefined' && !localStorage.getItem('accountName')){
            browserHistory.push('sign-in')
        }
    }

    changeMarketView(view) {
        this.setState({
            view: view
        })
    }

    render() {
        return (
            <div className="market-page">
                <Banner>
                    <MarketNav changeMarketView={this.changeMarketView.bind(this)}/>
                </Banner>
                <div className="container market-page-content">
                    {this.state.view === 'trade' ? <div> <Transaction/> <MyOrders/> </div> : <SellOrders/>}
                </div>
                <Navigation/>
            </div>

        )
    }
}
