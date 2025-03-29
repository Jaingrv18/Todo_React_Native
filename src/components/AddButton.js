import { View, Text, Touchable, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
//import { useNavigation } from '@react-navigation/native'
import { router } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AddButton = () => {
    
  return (
     
    <TouchableOpacity style={styles.container} onPress={()=> router.navigate('/addtodo')}>
         {/* <SafeAreaView /> */}
        <MaterialCommunityIcons name='plus' size={32} color='#fff' />
    </TouchableOpacity>
   
  )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom: 30,
        backgroundColor: 'rgba(82, 64, 161, 0.73)',
        padding :10,
        justifyContent: 'center',
        alignItems: 'center',
        right:30,
        borderRadius: 120,
    }
})
export default AddButton