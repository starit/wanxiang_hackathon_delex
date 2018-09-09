import React from 'react'
import './style.less'

export default class MyOrders extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orderData: [
                {
                    time: '13:17:20',
                    amount: '100 kW·h',
                    price: '0.9 CNY'
                },
                {
                    time: '13:17:20',
                    amount: '100 kW·h',
                    price: '0.9 CNY'
                },
                {
                    time: '13:17:20',
                    amount: '100 kW·h',
                    price: '0.9 CNY'
                }
            ]
        }
    }
    componentDidMount() {
        /*EOSJS*/

    }

    render() {
        return (
            <div className="component-my-orders component">
                <div className="component-title">
                    My Listed Sell Orders
                </div>
                <div className="orders-table">
                    {this.state.orderData.length > 0 ?  <table>
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.orderData.map(item => (
                            <tr>
                                <td>{item.time}</td>
                                <td>{item.amount}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table> : <div class="empty-hint">You have not listed any orders.</div>}

                </div>
            </div>
        )
    }
}