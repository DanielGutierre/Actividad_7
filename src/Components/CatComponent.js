import React from 'react'
import { Text, Image, View } from 'react-native'


const CatComponent = (props) => {

  return (
    <View>
    <Text>Hola soy un gato y mi nombre es {props.nombre} y mis raza es {props.raza}</Text>
    <Image
      source= {{uri: props.foto}}
      style= {{width: 200, height: 200}}
    ></Image>
    </View>
    
  )
  
}

export default CatComponent