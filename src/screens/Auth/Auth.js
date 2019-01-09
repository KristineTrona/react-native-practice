import React, {Component} from 'react'
import {View, Button, StyleSheet, ImageBackground} from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs'
import backgroundImage from '../../assets/background.jpg'

import DefaultInput from '../../components/UI/DefaultInput'
import HeadingText from '../../components/UI/HeadingText'
import MainText from '../../components/UI/MainText'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground'

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs();
  }

  render(){
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>  
          <MainText>
            <HeadingText >Please Log In </HeadingText>
          </MainText>
          <ButtonWithBackground color="#29aaf4" onPress={() => alert("hello")}>Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput style={styles.input} placeholder="Your E-mail Address"/>
            <DefaultInput style={styles.input} placeholder="Password"/>
            <DefaultInput style={styles.input} placeholder="Confirm Password"/>
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage:{
    width: "100%",
    flex: 1,
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
})


export default AuthScreen