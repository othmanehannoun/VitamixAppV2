import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { Get_User } from '../Redux/Slices/UserSlice'

import { useDispatch, useSelector } from 'react-redux'


const Profile = ({navigation}) => {
    const { user } = useSelector(state=>state.user)
    const JsonValue = JSON.parse(user)
    const getUser = JsonValue.user

  return (
    <View>
      <Text>Profile: {getUser._id}</Text>
      <Text>Profile: {getUser.name}</Text>
      <Text>Profile: {getUser.email}</Text>
      <Text>Profile: {getUser.role}</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

})