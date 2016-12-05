import React from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {Icon} from 'native-base'

import images from '../images'


const NavigationDrawer = (props) => {
    return (
        <View style={styles.container}>
            {/**<Image source={images.drawerBg} style={styles.bg}>**/}
            <View style={styles.bg}>
                <View style={styles.bgContent}>
                    <Image source={{uri: 'https://scontent.fsub2-1.fna.fbcdn.net/v/t1.0-1/p160x160/11913981_713048698800919_5961764666875035402_n.jpg?oh=42e5c4be6f37f298de76a9a8f9c7a381&oe=58AA6400'}} style={styles.pp} />
                    <Text style={styles.name}>Dayat</Text>
                    <Text style={{color: '#ddd'}}>dayat.py@gmail.com</Text>
                </View>
            </View>
            {/**</Image>**/}
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name='md-heart' style={styles.menuItemIcon} />
                    <Text style={styles.menuItemText}>Favorite Cafe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name='md-pin' style={styles.menuItemIcon} />
                    <Text>Cafe Near Me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name='md-book' style={styles.menuItemIcon} />
                    <Text>My Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name='md-cart' style={styles.menuItemIcon} />
                    <Text>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    bg: {
        height: 250, width: 300,
        backgroundColor: '#76B6D7'
    },
    bgContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    name: {
        fontSize: 24,
        color: '#fff',
        marginTop: 16
    },
    pp: {
        height: 80, width: 80,
        borderRadius: 50
    },
    menuContainer: {
        padding: 16
    },
    menuItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8
    },
    menuItemIcon: {
        width: 32
    }
})

export default NavigationDrawer
