import React from 'react'
import Loadable from 'react-loadable'
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';
import LoadingPage from '@/components/LoadingPage'

const App = Loadable({
    loader: () => import('@/pages/App'),
    loading: LoadingPage
})

const Home = Loadable({
    loader: () => import('@/pages/Home'),
    loading: LoadingPage
})

const Market = Loadable({
    loader: () => import('@/pages/Market'),
    loading: LoadingPage
})

const SignIn = Loadable({
    loader: () => import('@/pages/SignIn'),
    loading: LoadingPage
})

const NotFound = Loadable({
    loader: () => import('@/pages/NotFound'),
    loading: LoadingPage
})


export default (
    <Router history={browserHistory} onUpdate={() => {
        window.scroll(0, 0)
    }}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='market' component={Market}> </Route>
            <Route path='sign-in' component={SignIn}> </Route>
            <Route path='404' component={NotFound}/>
            <Redirect from='*' to='/404'/>
        </Route>
    </Router>
)