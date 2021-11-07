import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source ={require("./assets/Benedict.jpg")}  style ={ styles.profileImage}/>
        <TextInput    placeholder={"Account"}  />
      <StatusBar style="auto" />
    </View>
    
     <View style={styles.inputContainer}>
    <TextInput  style={styles.textInput}  placeholder={"UserName"} />
    <TextInput  style={styles.textInput}  placeholder={"Email"} /> 
    <TextInput  style={styles.textInput}  placeholder={"Password"} />
     
   </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity  style ={styles.submitContainer} >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}
///style goes here
const styles = StyleSheet.create({
  container: {
    flex:4,
    backgroundColor: 'white',
    
  },
  profileContainer:{
    flex:4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },

  inputContainer:  {
    flex:4,
    backgroundColor: 'white',
    
    justifyContent: 'center',
  },

  buttonContainer: {
    flex:2,
   
    alignItems: 'center',
   
  },
  profileImage: {
    height:"70%",
    width: "50%",
    borderRadius: 50
    
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    marginBottom:6,
    padding:10,
    margin: 15,
  },
  
  submitContainer: {
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: "blue",
   
    borderWidth: 5,
    marginTop:10,
    padding:10,

  }
});
