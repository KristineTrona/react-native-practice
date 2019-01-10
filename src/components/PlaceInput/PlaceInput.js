import React from 'react'

import DefaultInput from '../UI/DefaultInput'

const placeInput = (props) => {
  return(
    <DefaultInput 
      style={{width: "80%"}} 
      placeholder="Place Name"
      value={props.placeData.value}
      valid={props.placeData.valid}
      touched={props.placeData.touched}
      onChangeText={props.onChangeText}
    />
  )
}

export default placeInput