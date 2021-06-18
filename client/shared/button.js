import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 1,
    backgroundColor: '#E6AACE',
    marginBottom: 16,
    marginHorizontal: 100

  },
  buttonText: {
    color: '#3E3939',
    textTransform: 'uppercase',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'alegreya-bold'
  }
})
