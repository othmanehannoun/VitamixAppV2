import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import Categorey from '../components/Categorey'
import Menu from '../components/Menu'
import masques from '../../assets/images/masques.png'
import Footer from '../components/Footer'

import { useDispatch, useSelector } from 'react-redux'
import { getCatregory } from '../Redux/Slices/ProviderSlice'



const HomeScreen = ({navigation}) => {

  const dispatch = useDispatch()
  const {isLoading, category, error} = useSelector(state => state.category) 
 
  useEffect(()=>{
    dispatch(getCatregory())
  }, [dispatch])
  
  const handlePress = (Item_Id, key) =>{
    navigation.navigate('product', {id: Item_Id, key:key})
  }

  return (
    <View style={styles.container}>
        <ImageBackground source={masques} resizeMode={'cover'} style={{flex: 1}}>
          <Menu navigation = {navigation} />
          
          <View style={{padding: 20, flex:1}}>
              {
                isLoading ?
                <Text>Loading ...</Text>
                :
                <>
                  {
                    error ? 
                    alert(error) 
                    :
                    <Categorey 
                      category = {category}
                      onPress = {handlePress} 
                    />
                  }
                </>
              }
          </View>

          <Footer />
        </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})