import {ADD_PLACE, DELETE_PLACE} from '../actions/places'

import placeImage from '../../assets/beautiful-place.jpg'

let initialState = {
  places: []
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
            image: action.payload.image,
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