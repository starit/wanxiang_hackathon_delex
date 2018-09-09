import axios from 'axios'
import Eos from 'eosjs'

let eosConfig = Eos({
    httpEndpoint: 'https://api-kylin.eosasia.one',
    keyProvider: localStorage.getItem("privateKey"),
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
})

const eos = {
    getKWHBalance: () => {
        return eosConfig.getCurrencyBalance({
            code: 'delexaccount',
            account: localStorage.getItem('accountName'),
            symbol: "KWHT"
        }).then(function(asset) {
            let str = asset[0].substring(0, asset[0].length - 5)
            return Promise.resolve(str)
        });
    },
    getCNYTBalance: () => {
        return eosConfig.getCurrencyBalance({
            code: 'delexaccount',
            account: localStorage.getItem('accountName'),
            symbol: "CNYT"
        }).then(function(asset) {
            let str = asset[0].substring(0, asset[0].length - 5)
            return Promise.resolve(str)
        });
    },
    postAll: () => {
        axios.post('/account', {
            foo: 'bar'
        }).then(res => {
            return Promise.resolve(res)

        })
    }
}

export default eos;