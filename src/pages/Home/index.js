import React from 'react';
import Banner from '@/components/Banner'
import Balance from '@/components/Balance'
import MyPower from '@/components/MyPower'
import Transaction from '@/components/Transaction'
import MyDevices from '@/components/MyDevices'
import MyOrders from '@/components/MyOrders'
import MyTransactions from '@/components/MyTransactions'
import Navigation from '@/components/Navigation'
import {browserHistory} from 'react-router'

import './style.less'

class Home extends React.Component {
    componentWillMount(){
        if(typeof window !== 'undefined' && !localStorage.getItem('accountName')){
            browserHistory.push('sign-in')
        }
    }
    render() {
        return (
            <div className="home-page">
                <Banner>
                    <Balance/>
                </Banner>
                <div className="container home-page-content">
                    <MyPower/>
                    <Transaction/>
                    <MyDevices/>
                    <MyOrders/>
                    <MyTransactions/>
                    <Navigation/>
                </div>
            </div>
        )
    }
}

export default Home;