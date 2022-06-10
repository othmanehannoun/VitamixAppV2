
import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity , Image} from 'react-native';
import { PRIMARY_COLOR, WHITE, YELLOW_COLOR } from '../../constants/StyleColor';
import { CheckBox } from 'react-native-elements'
import { windowHeight } from '../../constants/Demonsions';
import { endPoint } from '../../constants/GlobaleVariables';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../../Redux/Slices/CartSlice";
import {getProductBySubCatregory} from '../../Redux/Slices/ProviderSlice'
import AsyncStorage from "@react-native-async-storage/async-storage";



const Products = ({isLoading, product, handleData}) => {
  const cart = useSelector((state) => state.cart);


  // useEffect(()=>{
  //   console.log('RRR', cart)
  // },[cart])

  const dispatch = useDispatch()
  
const [data, setData] = useState(null);

const [loading, setLoading] = useState(false);

  const [checked] = useState(new Set())

  const handelCheckBox = (item) => {
 
      if(checked.has(item)) {
          checked.delete(item)
      }

      else{
          checked.add(item)     
      }

      handleData(Array.from(checked))
      setData(Array.from(checked))
      

  }
  useEffect(()=>{
    AsyncStorage.setItem("cart", JSON.stringify(data));
    console.log('5555', data);
  }, [data])



  const renderItem = ({ item }) => (
    
   <>
  {/* { console.log('DDDDDDDDDDDD',item.checked)} */}
    <View style={styles.box} >
            <Image source={
              {
                uri: item.img != 'none' ? `${endPoint}/${item.img}` : '../../../assets/images/logo.png'
              }
            } 
              style={{width: "100%",
              height: 100,
              resizeMode: 'contain'
              }}
            />
            <Text style={{color: PRIMARY_COLOR, 
              fontWeight: 'bold',
              textTransform:'uppercase',
              marginTop: 5
              }}
            >{item.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <View style={styles.price}>
                  <Text style={{color: WHITE}}>{item.price} DH</Text>
                </View>
                <View style={{...styles.price, width: '30%'}}>

                <TouchableOpacity
                  // onPress={()=>{handelCheckBox(item)}}
                  onPress={()=>{dispatch(addToCart(item))}}
                  style={{}}
                  
                >
                 <Text style={{ color: WHITE}}>+ADD</Text>
                  {/* <CheckBox
                      checked = {item.checked}
                      onPress={() => handelCheckBox(item)}
                      containerStyle={styles.checkbox}             
                      checkedColor= {WHITE}
                  /> */}

                </TouchableOpacity>
                </View>
            </View>

        </View>

   </>
  );

  return (
    
    <SafeAreaView>
     {
       isLoading ?
       <Text>Loading ...</Text>
       :
      
       
       <FlatList
       numColumns={2}
       data={product}
       renderItem={renderItem}
       keyExtractor={(item, index) => index}
       showsHorizontalScrollIndicator={false}
     />
     
     }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  box:{
    width: '50%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
    
  title: {
    fontWeight: 'bold',
    color: WHITE,
  },
    price:{
      backgroundColor: PRIMARY_COLOR,
      color: WHITE,
      width: "45%",
      padding: 2,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5
  },
  checkbox:{
    padding: 0
  },
  btnActive:{
    backgroundColor: 'red'
  },
  btnInActive:{
    backgroundColor: 'blue'
  }

});

export default Products;
