export const ADD_PLACE = 'ADD_PLACE'
export const DELETE_PLACE = 'DELETE_PLACE'


export const addPlace = (placeName, location, image) => {
  return {
    type: ADD_PLACE,
    payload: {
      placeName, 
      location,
      image
    }
  }
}

export const deletePlace = (key) => {
  return {
    type: DELETE_PLACE,
    payload: key
  }
}