import React from 'react';
import AppControl from '@/components/AppControl'
import './style.less'

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <AppControl/>
                <div className="app-main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App