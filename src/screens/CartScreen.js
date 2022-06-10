import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import { LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from '../constants/StyleColor'
import CartItem from '../components/CartItem'
import Maps from '../components/Maps'
import masques from '../../assets/images/masques.png'
import { windowHeight, windowWidth } from '../constants/Demonsions'

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <ImageBackground source={masques} style={{flex: 1, padding: 20}}>
       <Text style={styles.title}>
            Menu
        </Text>
        
        <View>
            <CartItem />
        </View>

        <View style={{
            flexDirection:'row',
            marginBottom: 20
        }}>
            <TouchableOpacity style={{...styles.button, backgroundColor:LIGHT_COLOR,}}>
                <Text style={{color:WHITE}}>Delivery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.button, 
                backgroundColor:SECONDARY_COLOR,
                borderColor: PRIMARY_COLOR,
                borderWidth: 1
                }}
            >
                <Text style={{color:PRIMARY_COLOR}}>Puck up</Text>
            </TouchableOpacity>
        </View>

        <View>
            <Maps />
        </View>
        

        <View style={styles.bottomView}>
            <TouchableOpacity style={styles.bottomButton}
            onPress={()=>{navigation.navigate('confimerOrder')}}>
                <Text style={{color:WHITE, fontWeight: 'bold', fontSize: 18}}>Make an Order</Text>
            </TouchableOpacity>
        </View>

       </ImageBackground>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        fontSize: 20,
        marginBottom: 10
      },
    button:{
        padding: 10,
        borderRadius: 20,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      
    },
    bottomView: {
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
        width: '100%',
        backgroundColor:LIGHT_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        shadowColor: '#52006A',
  
    }
})