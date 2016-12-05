'use strict'

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  ListView
} from 'react-native'

import RestaurantItem from './RestaurantItem'
import restaurants from '../api/restaurants'


class RestaurantList extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        this.state = {
            dataSource: ds.cloneWithRows(restaurants)
        }
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(item) => <RestaurantItem item={item} />}
                />
        )
    }
}

const styles = StyleSheet.create({

})


export default RestaurantList
