import React from 'react'
import {Form, Text} from 'informed'
import {browserHistory} from 'react-router'
import eos from '@/eos';
import './style.less'
import Eos from 'eosjs'
import {PrivateKey, PublicKey, Signature, Aes, key_utils, config} from 'eosjs-ecc'

function verifyAccount(accountName, wif, cb) {
    let eos = Eos({
        httpEndpoint: 'https://api-kylin.eosasia.one',
        chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
    });
    let pubkey
    try {
        pubkey = PrivateKey.fromString(wif).toPublic().toString()
    }
    
    catch (err) {
        return cb(err)
    }
    let loginStatus = {status: false}
    eos.getAccount({
        account_name: accountName
    }).then(acc => {
        let permList = []
        acc.permissions.forEach(function (perm) {
            let keys = perm.required_auth.keys
            keys.forEach(function(key) {
                if (key.key === pubkey) {
                    loginStatus.status = true
                    loginStatus.info = {role: perm.perm_name, key: key.key}
                }
            })
        })
        return cb(null, loginStatus)
    }).catch(function(err) {
        return cb(err)
    });
}

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.setFormApi = this.setFormApi.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.validateAccount = this.validateAccount.bind(this)
        this.validateKey = this.validateKey.bind(this)
    }

    setFormApi(formApi) {
        this.formApi = formApi
    }

    submitForm() {
        const values = this.formApi.getState().values;
        verifyAccount(values.accountName, values.privateKey, function(e, result) {
            if (e) {
                localStorage.removeItem('accountName')
                localStorage.removeItem('privateKey')
            }
            if (result && result.status) {
                console.log('login successfully')
                localStorage.setItem('accountName', values.accountName)
                localStorage.setItem('privateKey', values.privateKey)
                browserHistory.push('/')
            } else {
                localStorage.removeItem('accountName')
                localStorage.removeItem('privateKey')
            }
        });
    }

    validateAccount(value) {
        return !value || value.length < 6 ? 'Username is too short' : null;
    }

    validateKey(value) {
        return !value || value.length < 6 ? 'Password is too short' : null
    }

    render() {
        return (
            <div className="container component-sign-in component">
                <div className="row">
                    <div className="col-xs-12">
                        <Form getApi={this.setFormApi} onSubmit={this.submitForm}>
                            {({formState}) => (
                                <div>
                                    <div className="form-group">
                                        <Text field='accountName' className='form-control' placeholder="Enter Account Name"
                                              validate={this.validateAccount} validateOnChange/>
                                        <div className="form-err-hint">
                                            {formState.touched.phone && formState.errors.phone}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <Text field='privateKey' type="password" className='form-control'
                                              validate={this.validateKey} validateOnChange
                                              placeholder="Enter Private Key"/>
                                        <div className="form-err-hint">
                                            {formState.touched.password && formState.errors.password}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type='submit' className='btn btn-delex form-control'>Sign In</button>
                                    </div>
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}