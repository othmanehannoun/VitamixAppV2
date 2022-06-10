import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import Menu from '../components/Menu'
import masques from '../../assets/images/masques.png'
import { PRIMARY_COLOR, WHITE } from '../constants/StyleColor'
import CommandeInfo from '../components/CommandeInfo'
import Footer from '../components/Footer'
import Button from '../components/Button'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../Redux/Slices/CartSlice'


const CommandeScreen = ({navigation}) => {

    // const get = JSON.parse(AsyncStorage.getItem("cart"));
    //   console.log("DD", get)
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    // const RouteData = route.params;
    // const products = RouteData.products;
    // console.log('DDDaata', RouteData.products)

    const [total, setTotal] = useState(null)

    const handeTotal = (value) =>{
        setTotal(value)
    }
    useEffect(()=>{

    },[total])
    
    // useEffect(()=>{
    //     const getData = async () => {
    //         try {
    //           const jsonValue = await AsyncStorage.getItem('cart')
    //            console.log('MMMMM', JSON.parse(jsonValue));
    //           return  jsonValue != null ? JSON.parse(jsonValue) : null;

    //         } catch(e) {
    //           // error reading value
    //         }
    //       }
    //     getData()
    // },[])
   

  return (
    <View style={styles.container}>
        <ImageBackground source={masques} resizeMode={'cover'} style={{flex: 1}}>
        <Menu navigation = {navigation} />
        
        <View style={{padding: 20, flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: 40}}>
                <View style={{...styles.userinfo, width:'65%'}}>
                    <Text style={{color:WHITE, fontWeight:'bold'}}>OTMANE HANNOUNE</Text>
                </View>
                <View style={{...styles.userinfo, width:'30%'}}>
                    <Text style={{color:WHITE, fontWeight:'bold'}}>OTMANE</Text>
                </View>

            </View>

            <View>
            {cart.length > 0 ? (
              <>
              <TouchableOpacity 
              onPress={()=>{dispatch(clear())}}
              style={styles.btnClear}
              >
                  <Text style={{ color: WHITE}}>Clear Products</Text>
              </TouchableOpacity>

              <CommandeInfo 
                products={cart}
                handeTotal = {handeTotal}
              />
              </>
            )
             :
             <Text>Noo Data</Text>
            }

               
            </View>
        </View>

        <View style={{marginBottom: 20}}></View>
        
        <View style={styles.title}>
            <Text style={{color: PRIMARY_COLOR,marginBottom: 10,
                fontSize: 18, fontWeight: 'bold'}}>
                TOTAL: {total} DH
            </Text>
            <Text style={{color: PRIMARY_COLOR,
                fontSize: 18, fontWeight: 'bold'}}>
                LIVRAISON: GRATUIT
            </Text>
        </View>

        <View>
            <Button title='CHECKOUT'/>
        </View>



         <Footer />
        </ImageBackground>
    </View>
  )
}

export default CommandeScreen

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
    title:{
        justifyContent:'center', 
        alignItems:'center', 
        marginBottom: 30,
       
    },
    btnClear:{
        backgroundColor: PRIMARY_COLOR,
        marginBottom: 20,
        padding: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
       
        // width: 200
    }
})