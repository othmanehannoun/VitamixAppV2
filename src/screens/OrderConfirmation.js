import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native'
import Menu from '../components/Menu'
import masques from '../../assets/images/masques.png'
import { LIGHT_COLOR, PRIMARY_COLOR, WHITE } from '../constants/StyleColor'
import OrderInfo from '../components/OrderInfo'
import { windowWidth } from '../constants/Demonsions'


const OrderConfirmation = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={masques} resizeMode={'cover'} style={{flex: 1}}>
        
        <View style={{padding: 20}}>
           
            <View>
                <OrderInfo />
            </View>

        </View>

        <View style={styles.bottomView}>
           <TouchableOpacity style={{...styles.bottomButton, backgroundColor:WHITE, borderColor:LIGHT_COLOR, borderWidth:2}}
            onPress={()=>{navigation.navigate('confimerOrder')}}>
                <Text style={{color:LIGHT_COLOR, fontWeight: 'bold'}}>Track your Order</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.bottomButton, backgroundColor:LIGHT_COLOR}}
            onPress={()=>{navigation.navigate('confimerOrder')}}>
                <Text style={{color:WHITE, fontWeight: 'bold'}}>Home</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
  )
}

export default OrderConfirmation

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    userinfo:{
        backgroundColor: PRIMARY_COLOR,
        padding: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        flexDirection:'row',
        width: windowWidth,
        padding: 20, 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        bottom: 0,
    },
    bottomButton:{
        padding: 15,
        borderRadius: 10,
        margin: 5,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        shadowColor: '#52006A',
  
    }
})