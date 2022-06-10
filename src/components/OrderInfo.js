import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native'
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE} from '../constants/StyleColor'
import Button from './Button'

import image from '../../assets/images/Soustraction.png'


const OrderInfo = () => {
  return (
    <View style={styles.container}>

        <View style={styles.title}>
            <Text style={{
                color: PRIMARY_COLOR,
                fontSize: 30, 
                fontWeight: 'bold',
                
                }}
            >
                Order Confirmation
            </Text>
        </View>

       <ImageBackground source={image} resizeMode={"stretch"} 
        style={{padding: 20,
              elevation: 24,
              shadowColor: '#52006A',
            }} 
        >

       <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginBottom: 50}}>
            <View>
                <Text style={{
                    color: WHITE,
                    fontSize: 25,
                    fontWeight: 'bold'
                }}
                >
                    FeedMe
                </Text>
            </View>

            <View>
                <Text style={{
                    color: WHITE,
                    fontWeight: 'bold'
                    }}
                >
                   17/07/2018
                </Text>
                <Text style={{
                    color: WHITE,
                    fontWeight: 'bold',
                    marginLeft: 'auto'
                    }}
                >
                   18:20
                </Text>
            </View>
        </View>

        <Text style={{
            color: WHITE,
            fontWeight: 'bold',
            marginBottom: 30,
            fontSize: 20
            }}
        >
            Thai Planet
        </Text>
       <View style={{ flexDirection: 'row', justifyContent:'space-between', marginBottom: 50,}}>

            <View style={{width:'65%'}}>
                {/* <Text style={{...styles.text, fontSize: 25}}>FeedMe</Text> */}
                <Text style={styles.text}>Order Number</Text>
                <Text style={styles.text}>Time</Text>
                <Text style={styles.text}>SALADE</Text>
            </View>
            <View style={{width:'30%'}}>
                <Text style={{...styles.text, marginLeft:'auto'}}>12345678</Text>
                <Text style={{...styles.text, marginLeft:'auto'}}>30 min</Text>
                <Text style={{...styles.text, marginLeft:'auto'}}>35 DH</Text>
            </View>

        </View>

        <View style={{
           flexDirection: 'row', justifyContent:'space-between', 
           marginBottom: 50, borderBottomColor: WHITE, borderBottomWidth: 1}}>

        </View>

        <View style={styles.total}>
            <Text style={{color: WHITE,
                fontSize: 30,}}>
                TOTAL: 
            </Text>
            <Text style={{color: WHITE,
                fontSize: 30, fontWeight: 'bold'}}>
                160 DH
            </Text>
        </View>

       </ImageBackground>

    </View>
  )
}

export default OrderInfo

const styles = StyleSheet.create({
    container:{

    },
    title:{
        marginBottom: 30,
    },
    total:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    text:{
        color: WHITE,
        fontWeight: 'bold',
        marginBottom: 15
    },
    button:{
        padding: 10,
        borderRadius: 20,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      
    },
})