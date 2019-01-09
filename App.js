import {Navigation} from 'react-native-navigation'
import {Provider} from 'react-redux'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlacesScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetailsScreen from './src/screens/PlaceDetails/PlaceDetails'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'

import configureStore from './src/store/configureStore'

const store = configureStore()

//Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider)
Navigation.registerComponent("awesome-places.SharePlacesScreen", () => SharePlaceScreen, store, Provider)
Navigation.registerComponent("awesome-places.FindPlacesScreen", () => FindPlacesScreen, store, Provider)
Navigation.registerComponent("awesome-places.PlaceDetailsScreen", () => PlaceDetailsScreen, store, Provider)
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer)

//Start the App

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})
