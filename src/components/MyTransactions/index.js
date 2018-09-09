import React from 'react'
import './style.less'

export default class MyTransactions extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            transactionData: [
                {
                    time: '13:33:11',
                    amount: '321 kW·h',
                    price: '0.9 OES'
                },
                {
                    time: '13:33:11',
                    amount: '321 kW·h',
                    price: '0.9 OES'
                },
                {
                    time: '13:33:11',
                    amount: '321 kW·h',
                    price: '0.9 OES'
                }
            ]
        }
    }
    componentDidMount(){
        /*EOSJS*/

    }
    render() {
        return (
            <div className="component-my-transactions component">
                <div className="component-title">My Transaction</div>
                <div className="transaction-table">
                    {this.state.transactionData.length > 0 ? <table>
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.transactionData.map(item => (
                            <tr>
                                <td>{item.time}</td>
                                <td>{item.amount}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table> : <div className="empty-hint">You do not have any transaction records.</div>}

                </div>

            </div>
        )
    }
}