'use strict'

import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  ScrollView
} from 'react-native'
import {Icon} from 'native-base'
import foods from '../api/foods'


const FoodItem = ({item}) => {
    return (
        <View style={styles.item}>
            <Image source={{uri: item.thumb}} style={styles.img}>
                <Text style={styles.price}>$ {item.price}</Text>
            </Image>
            <Text style={{marginLeft: 3}}>{item.name}</Text>
        </View>
    )
}


class RestaurantTabMenu extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        this.state = {
            dataSource: ds.cloneWithRows(foods)
        }
    }
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <ScrollView
                style={{backgroundColor: '#EEE'}}
                initialListSize={3}>
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={(item) => <FoodItem item={item} />}
                    />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        height: 100,
        width: 100,
        margin: 8,
        backgroundColor: '#FFF',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.12)'
    },
    img: {
        alignItems: 'flex-end',
        height: 80
    },
    price: {
        padding: 3,
        backgroundColor: '#48A6E0',
        opacity: 0.8,
        color: '#FFF'
    }
})


export default RestaurantTabMenu
