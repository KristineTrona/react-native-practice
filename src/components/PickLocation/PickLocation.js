import React, {Component} from  'react'
import {View, Button, StyleSheet, Dimensions} from 'react-native'
import MapView from 'react-native-maps'

export default class PickLocation extends Component {

  state={
    focusedLocation: {
      latitude: 52.0894444,
      longitude: 5.1077981,
      latitudeDelta: 0.8, 
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.8
    },
    marker: null
  }

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate

    this.map.animateToRegion({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.02,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.02
      
    })

    this.setState(prevState => {
      return {
        focudedLocation:{
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
        marker: <MapView.Marker coordinate={coords}/>
      }
    })

    this.props.onLocationPick({
      latitude: coords.latitude,
      longitude: coords.longitude
    })
  }

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent={
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        }
      }
      this.pickLocationHandler(coordsEvent)
    },
    err => {
      console.log(err);
      alert("Fetching the location failed, please pick one manually!")
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <MapView 
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          ref={ref => this.map = ref}
        >
          {this.state.marker}
        </MapView>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={this.getLocationHandler}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    width: "100%",
    alignItems: "center"
  },
  map: {
    width: "100%",
    height: 250
  },
  button: {
    margin: 8
  }
})