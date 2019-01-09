import { Navigation } from 'react-native-navigation'

const startTabs = () => {

  Navigation.startTabBasedApp({
    tabs:[
      {
        screen: "awesome-places.FindPlacesScreen",
        label: "Find Place",
        title: "Find Place"
      },
      {
        screen: "awesome-places.SharePlacesScreen",
        label: "Share Place",
        title: "Share Place"
      }
    ]
  })

}

export default startTabs