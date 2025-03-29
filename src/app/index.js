import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import { resetAndNavigate } from '../utils/resetAndNavigate';
import { Image } from 'react-native';
import { screenHeight, screenWidth } from '../utils/constants';


const Index = () => {

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    })
    const [hasNavigated, setHasNavigated] = useState(false);

    useEffect(()=>{
        if(loaded && !hasNavigated){
            const timeoutId = setTimeout(()=>{
                resetAndNavigate('/home')
            }, 1000)
            return () => clearTimeout(timeoutId);

        }
    }, [loaded, hasNavigated]);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/icon.png')} style={styles.image}></Image>
    </SafeAreaView>
    

  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: 'white'
    },
    image:{
      width: screenWidth* 0.3,
      height: screenHeight* 0.2,
    }
  })
  

export default Index;