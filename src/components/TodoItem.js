import { View, Text, StyleSheet, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/reducers/todoSlice';
import CustomButton from './CustomButton';

const TodoItem = ({item}) => {

    const [value, setValue] = useState(item?.title);
    const [description, setDescription] = useState(item?.desc);
    const [visible, setVisible] = useState(false);
    

    const dispatch = useDispatch();
   const deleteHandler = async () =>{
        dispatch(deleteTodo({id: item?.id}))
   }
   
   const onUpdate = async()=>{
    dispatch(updateTodo({id:item?.id, title: value, desc: description}));
    setVisible(false);

   }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.info}>
         <Text style={styles.title}>{item?.title}</Text>
         <Text style={styles.desc}>{item?.desc}</Text>
        </View>

        
        <View style={styles.icon}>
         
            <MaterialCommunityIcons 
            name='pencil-circle' 
            size={26} 
            color='rgba(82, 64, 161, 0.73)'
            onPress={()=>{setVisible(true)}} 
            />
            <Ionicons name='trash-sharp' size={26} color='red' onPress={deleteHandler}/>    

        </View>

    </View>

    <Modal transparent={true}  animationType="slide" visible={visible} onRequestClose={()=>setVisible(false)}>
            <View style = {styles.modal}>
                <View style={styles.modalContainer}>
                <Ionicons name='close-circle' 
                size={24} color='#fff' 
                onPress={()=>setVisible(false)} style={styles.close}/>
                
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
                    
                            <CustomButton title='UPDATE' onPress={onUpdate}  />
                </View>         
            </View>
        </Modal>


    </>
  )
}

const styles = StyleSheet.create({
    mainModal:{
        position:'absolute'
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2',
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    info:{
        width: '70%'
    },
    icon:{
        width: '25%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        gap: 15,

    },
    desc:{
        fontSize: 14,
        color: '#888',
        textAlign: 'left'
    },
    title:{
        fontSize: 16,
        fontWeight: 500,
        color: '#222'
    },
    edit:{
        width:12,
        height:12,
        resizeMode: 'contain',
        margin: 5
    },
    trash:{
        width:12,
        height:12,
        resizeMode: 'contain',
        margin: 5
    },
    modal:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    modalContainer:{
        borderRadius: 15,
        backgroundColor:'#fff',
        margin: 10,
        padding: 10, 
        width: '90%'
    },
    input:{
        borderWidth: 1,
        padding: 14,
        borderColor: '#ccc',
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    morePadding:{
        marginTop: 20,
    },
    minHeight:{
        minHeight:120
    },
    close:{
        width: 5,
        height: 5,
        position: 'absolute',
        top: 10,
        right:10,
    }
})

export default TodoItem