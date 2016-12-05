import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
    ToastAndroid,
    TouchableOpacity
} from 'react-native'
import {Button, Icon} from 'native-base'
import {Actions} from 'react-native-router-flux'

const RestaurantItem = ({item}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.item}>
                <TouchableOpacity style={{flex: 1}} onPress={() => {
                    Actions.restaurantDetail({restaurant: item})
                }}>
                <Image source={{uri: item.photo}} style={styles.img}>
                    <View style={styles.itemInfoContainer}>
                        <View style={styles.favorite}>
                            <Button transparent large onPress={() => {
                                ToastAndroid.show('Favorite Button', ToastAndroid.SHORT)
                            }}>
                                <Icon name='md-heart-outline' style={{color: '#fff', fontSize: 32}} />
                            </Button>
                        </View>
                        <View>
                            <Text style={{fontSize: 24, color: '#fff'}}>{item.title}</Text>
                            <Text style={{fontSize: 16, color: '#ddd'}}>{item.address}</Text>
                        </View>
                    </View>
                </Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 250,
        flex: 1,
        borderBottomColor:
        '#ccc',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    item: {
        flex: 1,
        padding: 16
    },
    img: {
        flex: 1
    },
    itemInfoContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        padding: 16,
        justifyContent: 'space-between'
    },
    favorite: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default RestaurantItem
