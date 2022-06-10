import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigation'
import AuthNavigator from './AuthNavigator';
import {useDispatch, useSelector } from 'react-redux';
import {addToken} from '../Redux/Slices/UserSlice'
import AsyncStorage from "@react-native-async-storage/async-storage";


const AppRoute = () => {
    const user = useSelector(state=>state.user.user)
    const dispatch = useDispatch()
  
    // console.log(user)
    useEffect(()=>{
      dispatch(addToken())
    },[])

    return (
        <NavigationContainer>
            {/* Conditional stack navigator rendering based on login state */}

            {
                user ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute