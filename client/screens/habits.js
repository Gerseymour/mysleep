import React, { useState } from 'react'
import { View, Text, FlatList, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import Card from '../shared/card'
import FlatButton from '../shared/button'
import ClickService from '../services/ClickService'

export default function Habits ({ navigation }) {
  const [habits, setHabits] = useState([])
  const pressHandler = () => {
    navigation.goBack()
  }
  
  // Save habit to DB
  const saveHabit = async (habit) => {
    const data = await ClickService.addHabit(habit)
    await setHabits([...habits, data])
    console.log('habs',habits)
  }

  // Remove habit
  const removeHabit = (habit) => {
    setHabits(habits.filter((el) => {
      return el.habit !== habit
    }))
  }
  console.log('rerender', habits)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Today's Habits</Text>

        <Formik
          initialValues={{ habit: '' }}
          onSubmit={(values, actions) => {
            actions.resetForm()
            saveHabit(values)
          }}
        >
          {(props) => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Add habit'
                onChangeText={props.handleChange('habit')}
                value={props.values.habit}
              />
              <FlatButton text='submit' onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>

        <View style={globalStyles.container}>
          <FlatList
            data={habits}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <View >
                <TouchableOpacity onPress={() => removeHabit(item.habit)} >
                  <Card>
                    <Text style={globalStyles.componentText} testID="Habit">{item.habit}</Text>
                  </Card>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <FlatButton text='Home' onPress={pressHandler} />
      </View>
    </TouchableWithoutFeedback>
  )
}
