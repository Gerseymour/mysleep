import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { globalStyles } from '../styles/global'
import ClickService from '../services/ClickService'
import ApiService from '../services/ApiService'
import Card from '../shared/card'
import FlatButton from '../shared/button'


export default function Indicators() {
  const [habitList, setHabitList] = useState([])

  const pressHandlerAPI = () => {
    console.log('in indicators api');
    ApiService.getGoogleData({})
      .then(() => ClickService.getData())
      .then(habits => setHabitList(habits))
      .catch((e) => console.error('there was an error: ', e));
  }

  useEffect(() => {
    ClickService.getData()
    // .then(habits => setHabitList(habits))
    return (() => {
      console.log('unmounted');
    })
  }, [])

  const list = habitList.map(el => {
    el.deepSleepAverage = (el.deepSleepTotal / el.count).toFixed(2)
    return el
  })

  const sortedList = list.sort(function (a, b) {
    const sorted = a.deepSleepAverage - b.deepSleepAverage
    return sorted
  })


  const Item = ({ habit, deepSleepAverage }) => (
    <View>
      <Card>
        <Text style={globalStyles.componentText}>{habit} __ {deepSleepAverage}hrs</Text>
      </Card>
    </View>
  )

  const renderItem = ({ item }) => <Item habit={item.habit} deepSleepAverage={item.deepSleepAverage} />
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Sleep Quality Indicators</Text>
      <FlatButton text='Update' onPress={pressHandlerAPI} />
      <View>
        <SafeAreaView>
          <FlatList
            data={sortedList}
            keyExtractor={item => item._id}
            renderItem={renderItem}
          />
        </SafeAreaView>
      </View>
    </View>
  )
}
