// import { View, Text, StyleSheet } from 'react-native'
// import React, { useState } from 'react'
// import CustomButton from '../components/CustomButton'
// import CustomHeader from '../components/CustomHeader'
// import { TextInput } from 'react-native-gesture-handler'
// import { useDispatch } from 'react-redux'
// import { addTodo } from '../redux/reducers/todoSlice'
// import { router } from 'expo-router'


// const Addtodo = () => {

    
//     const dispatch = useDispatch()
//     const [value, setValue] = useState('');
//     const [description, setDescription] = useState('');

//     const submit = async()=>{
//         if(value.trim() =='' || description.trim()==''){
//             Alert.alert('Please write description');
//             return;
//         }
        
//         dispatch(addTodo({title: value, desc: description}));

//         router.back();
//     }
//   return (
//    <View style={styles.container}>
//         <CustomHeader title = 'Add new Todo' isBackButton={true} />

//         <TextInput 
//             placeholder='Enter your task here'
//             value={value}
//             onChangeText={setValue}
//             style = {[styles.input, styles.morePadding]}   
        
//         />

// <TextInput 
//             placeholder='Enter your task description'
//             value={value}
//             numberOfLines={4}
//             multiline
//             maxLength={120}
//             onChangeText={setDescription}
//             style = {[styles.input, styles.minHeight]}   
        
//         />

//         <CustomButton title='ADD' onPress={submit}  />
     
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'white'
//     },
//     input:{
//         borderWidth: 1,
//         padding: 14,
//         borderColor: '#ccc',
//         marginHorizontal: 15,
//         marginBottom: 10,
//         borderRadius: 10,
//         fontSize: 18,
//     },
//     morePadding:{
//         marginTop: 20,
//     },
//     minHeight:{
//         minHeight:120
//     }
// })


// export default Addtodo


import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/todoSlice';
import { router } from 'expo-router';

const Addtodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit  = async()=>{
        if(value.trim() == "" || description.trim()==""){
            Alert.alert('Please add todo first!!')
            return;
        }
        dispatch(addTodo({title: value, desc: description}));
        router.back();
    }
  return (
   <View style={styles.container}>
        <CustomHeader title='Add new Todo' isBackButton={true} />
      
        <TextInput
            placeholder='Enter your task here'
            value={value}
            onChangeText={setValue}
            style = {[styles.input, styles.morePadding]}   
        
        />

        <TextInput 
            placeholder='Enter your task description'
            value={description}
            numberOfLines={4}
            multiline
            maxLength={120}
            onChangeText={setDescription}
            style = {[styles.input, styles.minHeight]}   
        
        />

        <CustomButton title='ADD' onPress={onSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    input:{
        borderWidth: 1,
        padding: 10,
        borderColor: '#ccc',
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
    },
    morePadding:{
        marginTop: 20,
    },
    minHeight:{
        minHeight:120
    }

})

export default Addtodo