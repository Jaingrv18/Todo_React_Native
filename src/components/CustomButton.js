import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 100,
        padding: 15,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "rgba(82, 64, 161, 0.73)",
        alignSelf:"center",
        paddingHorizontal: 40,
    },
    text:{
        fontSize: 20,
        fontWeight: 600,
        color: '#fff'
    }
})

export default CustomButton