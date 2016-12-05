import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image,
  ToastAndroid
} from 'react-native'
import {InputGroup, Input, Button, Icon} from 'native-base'
import {Actions, ActionConst} from 'react-native-router-flux'

import images from '../images'

class Login extends Component {
    _handleLoginBtn() {
        // implement login logic
        Actions.home({type: ActionConst.REPLACE, direction: 'vertical'})
    }
    render() {
    return (
        <View style={styles.page}>
            <Image style={{flex: 1}} source={images.loginBg} resizeMode='cover'>
                <View style={styles.content}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='md-restaurant' style={{color: '#fff', fontSize: 38}}></Icon>
                        <Text style={{fontSize: 32, color: '#fff', marginLeft: 20}}>CafeIn</Text>
                    </View>
                    <View style={styles.form}>
                        <View style={{flex:1}}>
                            <InputGroup>
                                <Input style={{color: '#fff'}} placeholderTextColor='#ccc' placeholder='Username' />
                            </InputGroup>
                            
                            <InputGroup style={{marginTop: 10}}>
                                <Input style={{color: '#fff'}} placeholderTextColor='#ccc' placeholder='Password' secureTextEntry={true} />
                            </InputGroup>
                        </View>
                        
                        <Button
                            style={{alignSelf: 'stretch', marginTop: 50}}
                            onPress={this._handleLoginBtn.bind(this)}>
                            Login
                        </Button>

                        <View style={styles.socialBtn}>
                            <Button style={{flex: 20, backgroundColor: '#3B5998'}}>
                                <Icon name='logo-facebook'></Icon>
                                <Text>Facebook</Text>
                            </Button>
                            <View style={{flex: 1}}></View>
                            <Button style={{flex: 20}} danger>
                                <Icon name='logo-googleplus'></Icon>
                                <Text>Google</Text>
                            </Button>
                        </View>
                    
                    </View>
                </View>
            </Image>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        width: 280,
        marginTop: 80
    },
    socialBtn: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 100
    }
})


export default Login
