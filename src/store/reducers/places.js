import {ADD_PLACE, DELETE_PLACE} from '../actions/places'

import placeImage from '../../assets/beautiful-place.jpg'

const initialState = {
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
            name: action.payload, 
            image: placeImage
          }
        )
      }
    case DELETE_PLACE:
      return {
        ...state, 
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key
        }),
        selectedPlace: null
      }
    default:
      return state;
  }
}

export default reducer