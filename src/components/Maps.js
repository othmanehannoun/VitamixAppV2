import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { windowWidth } from '../constants/Demonsions'
import maps from '../../assets/images/maps.png'
import { PRIMARY_COLOR, WHITE } from '../constants/StyleColor'

const Maps = () => {
  return (
      <>
       <View style={styles.container}>
           
            <View style={{...styles.box, width:'30%'}}>
                <View style={styles.item}>
                    <Image source={maps} style={{height: 60, width: '100%', borderRadius:10}}/>
                </View>
            </View>

            <View style={{...styles.box, width:'70%'}}>
                <View style={styles.item}>
                    <Text style={styles.Item_Title}>Marina Mall brunch</Text>
                    <Text style={styles.Item_Adrees}>Sheikh Zaed Rd</Text>
                </View>
            </View>

       </View>

       <View>
            <Text style={styles.Item_Title}>
                Pick up your order in
            </Text>

            <Text style={{
                color:PRIMARY_COLOR, 
                fontWeight:'bold', 
                marginBottom: 10,
                fontSize: 30
                }}
            >
                30 min
            </Text>
       </View>
      </>
   
  )
}

export default Maps

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 20
    },
    box:{
        // width: '33.33%',
        padding: 5
    },

    Item_Title:{
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18
    },
    Item_Adrees:{
        color: PRIMARY_COLOR,
        fontSize: 15,
    },
})