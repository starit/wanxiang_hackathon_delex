import React from 'react'
import './style.less'

export default class AppControl extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            switched: false
        }
    }
    toggleSwitch() {
        this.setState({
            switched: !this.state.switched
        })
    }
    render(){
        return (
            <div className={(this.state.switched === true? 'switch-on ' : 'switch-off ') + 'app-control'}>
                <div className="container">
                    <div className="switch-light"/>
                    <h1>Control</h1>
                    <button className="switch-btn" onClick={this.toggleSwitch.bind(this)}/>
                </div>
            </div>
        )
    }
}