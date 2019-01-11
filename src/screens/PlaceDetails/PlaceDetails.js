import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, Dimensions} from 'react-native'
import MapView from 'react-native-maps'

import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import {deletePlace} from '../../store/actions/places'

class PlaceDetails extends Component {

  state = {
    viewMode: "portrait"
  }

  constructor(props){
    super(props)
    Dimensions.addEventListener("change", this.updateStyles)
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 600 ? "portrait" : "landscape"
    })
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key) 
    this.props.navigator.pop()
  }

  componentWillUnmount(){
    Dimensions.removeEventListener("change", this.updateStyles)
  }

  render(){
    return(
      <View 
        style={[
          styles.container, 
          this.state.viewMode === "portrait" 
            ? styles.portraitContainer 
            : styles.landscapeContainer
        ]}>
        <View style={styles.subContainer}>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
        </View>
        <View style={styles.subContainer}>
          <MapView 
            initialRegion={{
            ...this.props.selectedPlace.location,
            latitudeDelta: 0.02,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.02
            }}
            style={styles.map}>
            <MapView.Marker coordinate={this.props.selectedPlace.location}/>
          </MapView>
        </View>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.placeDeletedHandler}>
              <View style={styles.deleteButton}>
                <Icon size={30} name={Platform.OS === 'android' ? "md-trash" : "ios-trash"} color="red"/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  container:{
    margin: 30,
    flex: 1
  },
  portraitContainer:{
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row"
  },
  placeImage:{
    width: "100%",
    height: 200
  },
  placeName:{
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton:{
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetails)