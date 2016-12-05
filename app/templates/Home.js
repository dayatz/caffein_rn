import React, { Component } from 'react'
import {Actions} from 'react-native-router-flux'
import {
  StyleSheet,
  View,
  Text,
  DrawerLayoutAndroid
} from 'react-native'
import {Container, Header, Content, Button, Title, Icon} from 'native-base'

import RestaurantList from '../components/RestaurantList'
import NavigationDrawer from '../components/NavigationDrawer'

class Home extends Component {
    _openDrawer() {
        this.drawer.openDrawer()
    }
    render() {
    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => <NavigationDrawer />}
            ref={(_drawer) => this.drawer = _drawer}>
            <Container>
                <Header style={{backgroundColor: '#48A6E0'}}>
                    <Button transparent onPress={this._openDrawer.bind(this)}>
                        <Icon name='md-menu' />
                    </Button>
                    <Title>Find Cafe</Title>
                    <Button transparent>
                        <Icon name="md-search" />
                    </Button>
                    <Button transparent>
                        <Icon name="md-cart" />
                    </Button>
                </Header>

                <Content style={{backgroundColor: '#EEE', padding: 16}}>
                    <Text style={{fontSize: 32}}>Hi, Dayat.</Text>
                    <View style={{marginTop: 16}}>
                        <RestaurantList />
                    </View>
                </Content>
            </Container>
        </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({

})


export default Home
