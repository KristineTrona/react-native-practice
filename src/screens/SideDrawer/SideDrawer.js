import React, {Component} from 'react'
import {View, Text, Dimensions, StyleSheet} from 'react-native'

class SlideDrawer extends Component {
  render(){
    return(
      <View style={[styles.container, {width: Dimensions.get("window").width * 0.8}]}>
        <Text>Slide Drawer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "white",
    flex: 1
  }
})

export default SlideDrawer