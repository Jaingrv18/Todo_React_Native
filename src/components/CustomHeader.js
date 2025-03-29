import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'


const CustomHeader = ({title, isBackButton}) => {
    
  return (
    <View style={st.container}>
        <SafeAreaView />
        <View>
      <Text style={st.text}>{title}</Text>
        {isBackButton && (
            <TouchableOpacity style = {st.backbtn} onPress={()=>router.back()}>
              <Ionicons name='chevron-back-circle' size={26} color='#fff' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const st = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(82, 64, 161, 0.73)',
        padding: 15,
    },
    text:{
        fontFamily:'SpaceMono',
        fontSize: 21,
        color:'#fff',
        textAlign: 'center',
        bottom: 1,
    },
    backbtn:{
        position:'absolute',
        bottom: 1,
    }

})
export default CustomHeader