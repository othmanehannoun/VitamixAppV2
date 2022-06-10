import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PRIMARY_COLOR, WHITE } from '../constants/StyleColor'
// import Button from './Button'

const CommandeInfo = ({products, handeTotal}) => {

    

    const HandelSumTotal = () =>{
        let Subtotal = 0
        
            products.map(item =>{
                Subtotal += parseInt(item.price)
                handeTotal(Subtotal)
            })

    }

    useEffect(()=>{
        HandelSumTotal()
        // console.log('TTT', handeTotal)
    },[handeTotal])
  return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={{ borderBottomColor:PRIMARY_COLOR, 
                borderBottomWidth: 2, color: PRIMARY_COLOR,
                fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
                VOTRE COMMANDE
            </Text>
        </View>
       <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: 20}}>
          
          
                    <View style={{...styles.orderInfo, width:'65%'}}>
                    {
                        products.map((item)=>(
                            <Text style={styles.text}>{item.name}</Text>
                        ))
                    }
                    </View>
                    <View style={{width:'30%'}}>
                    {
                        products.map((item)=>(
                            <Text style={{...styles.text, marginLeft:'auto'}}>{item.price} DH</Text>
                        ))
                    }
                    </View>
                    
               




        </View>

        

    </View>
  )
}

export default CommandeInfo

const styles = StyleSheet.create({
    container:{

    },
    title:{
        justifyContent:'center', 
        alignItems:'center', 
        marginBottom: 30,
       
    },
    orderInfo:{
        padding: 5,
        borderEndColor: PRIMARY_COLOR,
        borderEndWidth: 2
    },
    text:{
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        marginBottom: 15
    }
})

