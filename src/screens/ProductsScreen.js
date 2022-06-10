import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView} from 'react-native'
import Menu from '../components/Menu'
import masques from '../../assets/images/masques.png'
import Pagination from '../components/Pagination'
import Product from '../components/ItemList/Product'
import ProductBySub from '../components/ItemList/ProductBySub'
import { LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/StyleColor'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import {getSubCByCatregory, getProductByCatregory} from '../Redux/Slices/ProviderSlice'
import Button from '../components/Button'

const Products = ({navigation, route}) => {
  const paramsData = route.params;
  const idCategory =  paramsData.id
 
  const [itemId, setItemId] = useState(idCategory);
  const [itemKey, setItemKey] = useState(null);
  const [subID, setSubID] = useState(null);
  

  // const [productsData, setProductsData] = useState([]);
   

  const dispatch = useDispatch()
  const {isLoading, category, subCategory,products, subProducts, error} = useSelector(state => state.category) 
  const cart = useSelector((state) => state.cart);
  
  const handleSetItemId = (value) =>{
    setItemId(value)
  }

  // const handleData = async(value) =>{
  //   setProductsData(value)
  // }

 useEffect(()=>{

 }, [products])


  useEffect(()=>{
    dispatch(getSubCByCatregory(itemId))  
  }, [itemId])

  useEffect(()=>{
    dispatch(getProductByCatregory(itemId))
  }, [dispatch])

  const handelChekout = () =>{
    if(cart.length == 0){
      alert('CHECK ONE PRODUCT')
    }
    else{
      navigation.navigate('commande')
    }
  }

  return (
    <View style={styles.container}>
        <ImageBackground source={masques} resizeMode={'cover'} style={{flex: 1}}>
        <Menu navigation = {navigation} />

          <View style={{paddingVertical: 15, 
            backgroundColor: SECONDARY_COLOR, borderColor: LIGHT_COLOR,
            borderWidth: 2, marginTop: 10}}>
            <Pagination 
              setItemId = {handleSetItemId}
              category = {category}
              index = {itemKey}
            />
          </View>

            <View style={{padding: 10, flex: 1}}>  
                {
                  subCategory.length > 0 ?
                 
              isLoading ?
              <Text>Loading ...</Text>
              :
              <ScrollView>
                {
                 subCategory.map((item, i)=>(
                   
                    <>
                    <Text style={{color: PRIMARY_COLOR,
                       marginLeft: 10, 
                       fontWeight: 'bold', 
                       borderBottomWidth: 2, 
                       borderBottomColor: PRIMARY_COLOR, 
                      }}>{item.name}
                    </Text>
                    
                      <ProductBySub 
                        sub_id = {item._id}
                        // handleData = {handleData}
                        isLoading = {isLoading}
                      />

                    </>
                   )
                 )
                }
               </ScrollView>  
            :
           <>
          
             <Product 
                // handleData = {handleData}
                product = {products}
                isLoading = {isLoading}
             
              />  
            </>  
           
                } 
            </View>
            <View>
              <Text></Text>
              <Button 
               title = "CHECKOUT"
               onPress={handelChekout}
              />
            </View>

          

          <Footer />

        </ImageBackground>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})