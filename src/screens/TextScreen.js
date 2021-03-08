import React,{useState} from 'react';
import { View,Text, TextInput ,StyleSheet } from 'react-native';

const TextScreen=()=>{
    const [name,setName]=useState("");
    return(
        <View>
            <TextInput 
            style={styles.input}
            autoCapitalize="none" 
            autoCorrect={false} //Ios has by default auto correct
            value={name}
            placeholder="Enter your name"
            onChangeText={(newValue)=>setName(newValue)}
            />
            <Text style={{margin:10}}>My Name is {name}</Text>
        </View>
    );
};
const styles= StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        height:40,
        paddingStart:8,
        paddingEnd:8,
        borderWidth: 1,
    }
});
export default TextScreen;