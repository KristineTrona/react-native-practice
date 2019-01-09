import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const defaultInput = (props) => {

  return(
    <TextInput 
      underlineColorAndroid="transparent"
      {...props}
      style={[styles.input, props.style]} 
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 8,
    margin: 5, 
  }
})


export default defaultInput