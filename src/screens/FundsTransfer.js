import { StyleSheet, Text, View, ImageBackground, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import masques from '../../assets/images/masques.png'
import transferLogo from  '../../assets/images/transferLogo.png'
import { LIGHT_COLOR, PRIMARY_COLOR, WHITE } from '../constants/StyleColor'
import { windowHeight, windowWidth } from '../constants/Demonsions'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FundsTransfer = () => {

    const [inputs, setInput] = useState({
        id_user: '',
        username: '',
        nombrePT: ''
    })
   
    const handleOnChange = (text, input) =>{
        setInput((prev)=>({...prev, [input]: text}))
    }

  return (
    <View style={styles.container}>
        <ImageBackground source={masques} resizeMode={'cover'} style={{flex: 1}} >
          <View style={styles.ViewId}>
            <Text style={{
                color: WHITE,
                fontWeight: 'bold',
                fontSize: 20
            }}>ID : 123456789</Text>
          </View>
          <KeyboardAvoidingView style={{flex: 1}}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView styles={{flex: 1}}>
                <View style={styles.logoImage}>
                    <Image source={transferLogo}/>
                    <Text style={{
                        color: PRIMARY_COLOR,
                        fontSize: 32,
                        fontWeight: 'bold',
                    }}>Transfert de fonts</Text>
                </View>

                <View style={styles.inputForm}>
                    <View style={styles.inputContainer}>
                        <View style={{width: '50%', marginTop: 5}}>
                            <Text style={styles.textInput}>ID d'utilisateur</Text>
                        </View>
                        <View style={{width:'50%'}}>
                        <TextInput
                            style={styles.input}
                            onChageText= {text =>{handleOnChange(text, 'id_user')}}
                        />
                        </View>
                    </View>

                    <View style={styles.inputContainer} >
                        <View style={{width: '50%', marginTop: 5}}>
                            <Text style={styles.textInput}>Nom d'utilisateur</Text>
                        </View>
                        <View style={{width:'50%'}}>
                            <TextInput
                                style={styles.input}
                                onChageText= {text =>{handleOnChange(text, 'id_user')}}
                            />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={{width: '50%', marginTop: 5}}>
                            <Text style={styles.textInput}>Nembre PT</Text>
                        </View>
                        <View style={{width:'50%'}}>
                            <TextInput
                                style={styles.input}
                                onChageText= {text =>{handleOnChange(text, 'id_user')}}
                            />
                        </View>
                    </View>

                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={styles.button} 
                    // onPress={onPress}
                    >
                      <Text style={styles.buttonText}>Envoyer</Text>
                    </TouchableOpacity>
                </View>
          
            </ScrollView>
            
          </KeyboardAvoidingView>
          
          <Footer />
        </ImageBackground>
      
    </View>
  )
}

export default FundsTransfer

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    ViewId:{
        backgroundColor: LIGHT_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    logoImage:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    inputForm:{
        padding: 20
    },
    inputContainer:{
        flexDirection: 'row',
        backgroundColor: LIGHT_COLOR,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10
    },
    textInput:{
        fontWeight: 'bold',
        fontSize: 18,
        color: WHITE
    },
    input: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: WHITE,
        width: "100%",
        color: WHITE,
        fontSize: 20,
        height: 40
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: WHITE,
        borderRadius: 10,
        paddingVertical: 10,
        width: windowWidth*0.6
      },
      buttonText: {
        color: LIGHT_COLOR,
        fontSize: 20,
        fontWeight: "bold",
      },
})


