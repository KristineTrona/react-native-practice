import React, {Component} from 'react'
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class SlideDrawer extends Component {
  render(){
    return(
      <View style={[styles.container, {width: Dimensions.get("window").width * 0.8}]}>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon style={styles.drawerItemIcon} name="ios-log-out" size={30} color="#aaa"/>
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: "white",
    flex: 1
  },
  drawerItem:{
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee"
  },
  drawerItemIcon:{
    marginRight: 5
  }
})

export default SlideDrawer