import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView} from 'react-native'
import { windowHeight } from '../constants/Demonsions'
import { PRIMARY_COLOR, WHITE } from '../constants/StyleColor'
import pizza from '../../assets/images/pizza.png'
import driot from '../../assets/images/droit.png'
import gouche from '../../assets/images/gouche.png'
import { endPoint } from '../constants/GlobaleVariables';
 

  const Item = ({ title, fIndex, index }) => (
    <View style={{...styles.box,
      marginHorizontal: 10,
      flex: 1, 
      paddingVertical: 10,
      justifyContent: 'center', 
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 20,
      borderColor: PRIMARY_COLOR,
      backgroundColor: index == fIndex ? 'blue' : 'green'
      }}
    >
        <Image source={pizza} style={{width:100, height: 70}}/>
        <Text style={{color:PRIMARY_COLOR,fontWeight:'bold', fontSize: 10}}>{title}</Text>
 
    </View>
  );


const Pagination = ({setItemId, category}) => {

  const renderItem = ({ item, index: fIndex}) => (
    <>
    {
      index == fIndex ? setItemId(item._id)
      :
      null
    }
    <View style={{...styles.box,
      marginHorizontal: 10,
      flex: 1, 
      paddingVertical: 10,
      justifyContent: 'center', 
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 20,
      borderColor: PRIMARY_COLOR,
      // backgroundColor: index == fIndex ? 'blue' : 'green'
      }}
    >
        <Image 
        source={{
          uri: `${endPoint}/${item.img}`
        }} 
        style={{width:100, height: 70}}/>
        <Text style={{color:PRIMARY_COLOR,fontWeight:'bold'}}>{item.name}</Text>
 
    </View>
    </>

  );

  const refContainer = React.createRef(null); 
  const [index, setIndex] = useState(0);

    useEffect(()=>{   
      refContainer.current?.scrollToIndex({
        index,
        animation: true,
        viewPosition: 1,
      })
         
  },[index])

  return (
    <View style={styles.container}>
        <View style={styles.box}>
            
          <TouchableOpacity style={styles.paginationIcon}
           onPress={()=>{
            if(index == 0){
              return
            }
            setIndex(index - 1)
          }}>
            
            <Image source={driot} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
       </View>

          <SafeAreaView style={{
              width: 120
              }}
          >
            <FlatList
              ref={refContainer}
              initialScrollIndex={index}
              data={category}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              horizontal
             
            />
          </SafeAreaView>
        

        <View style={styles.box}>
            
            <TouchableOpacity style={styles.paginationIcon}
              onPress={()=>{
                if(index == category.length - 1){
                  return
                }
                setIndex(index + 1)
              }}
            >
                
              <Image source={gouche} style={{width: 100, height: 100}}/>
            </TouchableOpacity>
        </View>
    
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})