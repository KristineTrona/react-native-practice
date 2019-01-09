import {Navigation} from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlacesScreen from './src/screens/FindPlace/FindPlace'

//Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen)
Navigation.registerComponent("awesome-places.SharePlacesScreen", () => SharePlaceScreen)
Navigation.registerComponent("awesome-places.FindPlacesScreen", () => FindPlacesScreen)

//Start the App

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})


//Code before adding navigation:

// import React, {Component} from 'react';
// import {StyleSheet, View} from 'react-native';
// import {connect} from 'react-redux'

// import PlaceInput from './src/components/PlaceInput/PlaceInput'
// import PlaceList from './src/components/PlaceList/PlaceList'
// import PlaceDetails from './src/components/PlaceDetails/PlaceDetails'
// import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/places'


// class App extends Component {


//   placeAddedHandler = (placeName) => {
//     this.props.onAddPlace(placeName)
//   }

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace()
//   }

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key)
//   }

//   modalClosedHandler = () => {
//     this.props.onDeselectPlace()
//   }

//   render() {

//     return (
//       <View style={styles.container}>
//         <PlaceDetails 
//           selectedPlace={this.props.selectedPlace} 
//           onItemDeleted={this.placeDeletedHandler} 
//           onModalClosed = {this.modalClosedHandler}
//         />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
//         <PlaceList 
//           places={this.props.places}
//           onItemSelected={this.placeSelectedHandler}
//         />
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 40,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch (selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)