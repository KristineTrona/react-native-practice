export const ADD_PLACE = 'ADD_PLACE'
export const DELETE_PLACE = 'DELETE_PLACE'
export const SELECT_PLACE = 'SELECT_PLACE'
export const DESELECT_PLACE = 'DESELECT_PLACE'

export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
  }
}

export const selectPlace = (key) => {
  return {
    type: SELECT_PLACE,
    payload: key
  }
}

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE,
  }
}