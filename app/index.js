import React from 'react'
import {Router, Scene} from 'react-native-router-flux'

import Login from './templates/Login'
import Register from './templates/Register'
import Home from './templates/Home'
import RestaurantDetail from './templates/RestaurantDetail'


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='login' component={Login} title='Login' hideNavBar initial />
                    <Scene key='register' component={Register} />
                    <Scene key='home' component={Home} title='Home' direction='vertical' hideNavBar />
                    <Scene key='restaurantDetail' component={RestaurantDetail} direction='vertical' hideNavBar panHandlers={null} />
                </Scene>
            </Router>
        )
    }
}
