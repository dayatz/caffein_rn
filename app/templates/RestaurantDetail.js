'use strict'

import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import {Button, Header, Container, Content, Icon, Title, Tabs} from 'native-base'
import {Actions} from 'react-native-router-flux'

import customThemes from '../config/customThemes'
import RestaurantTabMenu from '../components/RestaurantTabMenu'
import RestaurantTabGallery from '../components/RestaurantTabGallery'
import RestaurantTabMap from '../components/RestaurantTabMap'
import RestaurantTabInfo from '../components/RestaurantTabInfo'


const RestaurantDetail = ({restaurant}) => {
    return (
        <View style={{flex: 1}}>
            <Image source={{uri: restaurant.photo}} style={styles.cover}>
                <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <Header style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name='md-arrow-back' />
                    </Button>
                    <Title>{restaurant.title}</Title>
                    <Button transparent>
                        <Icon name="md-calendar" />
                    </Button>
                    <Button transparent>
                        <Icon name="md-heart-outline" />
                    </Button>
                </Header>
                <View style={styles.info}>
                    <Text style={styles.address}>{restaurant.address}</Text>
                    <Text style={styles.open}>8am - 12pm</Text>
                </View>
                </View>
            </Image>
            <Tabs theme={customThemes} style={{flex:1}}>
                <View style={{flex:1}} tabLabel='Menu'>
                    <RestaurantTabMenu />
                </View>
                <View style={{flex:1}} tabLabel='Gallery'>
                    <RestaurantTabGallery />
                </View>
                <View style={{flex:1}} tabLabel='Map'>
                    <RestaurantTabMap />
                </View>
                <View style={{flex:1}} tabLabel='Info'>
                    <RestaurantTabInfo />
                </View>
            </Tabs>
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {
        height: 280
    },
    tabItem: {
        flex:1,
        flexDirection: 'column'
    },
    info: {
        justifyContent: 'flex-end',
        padding: 24,
        flex: 1
    },
    address: {
        fontSize: 18,
        color: '#fff'
    },
    open: {
        fontSize: 16,
        color: '#ddd'
    }
})


export default RestaurantDetail
