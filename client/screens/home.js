import React from 'react'
import { View, Text, } from 'react-native'
import { globalStyles } from '../styles/global'
import FlatButton from '../shared/button'

export default function Home ({ navigation }) {
  const pressHandlerHabits = () => {
    navigation.navigate('Habits')
  }

  const pressHandlerIndicators = () => {
    navigation.navigate('Indicators')
  }

  const pressHandlerLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Last night's sleep: 8h 22m</Text>
      {console.log('screens/home console log', navigation.state.params)}
      <Text style={globalStyles.titleText}>Total deep sleep: 2h 14m</Text>
      <FlatButton text='Add Habits' data-cy="nav-add-habit" onPress={pressHandlerHabits} testID='add-button'/>
      <FlatButton text='Check indicators' onPress={pressHandlerIndicators} />
      <FlatButton text='Login' onPress={pressHandlerLogin} />
    </View>
  )
}
