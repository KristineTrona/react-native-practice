import {ADD_PLACE, DELETE_PLACE} from '../actions/places'

import placeImage from '../../assets/beautiful-place.jpg'

let initialState = {
  places: [{
    key: `1`,
    name: "Pretty place", 
    image: placeImage,
    location: {
      latitude: 52.090695,
      longitude: 5.1191253,
    }
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_PLACE:
      return {
        ...state, 
        places: state.places.concat(
          {
            key: `${Math.random()}`,
            name: action.payload.placeName, 
            image: placeImage,
            location: action.payload.location
          }
        )
      }
    case DELETE_PLACE:
      return {
        ...state, 
        places: state.places.filter(place => {
          return place.key !== action.payload
        })
      }
    default:
      return state;
  }
}

export default reducer