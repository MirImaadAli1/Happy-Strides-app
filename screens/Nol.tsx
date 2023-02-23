import { StyleSheet, TextInput, Button, Pressable, Alert,  } from 'react-native';
import React, {useState} from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';


export default function Nol() { 
  
  
  const [inputValue, setInputValue] = useState('');
  const connectPrompt = () => {
    Alert.alert('Message', 'Your Nol Card has been connected', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  
  const handleInputChange = (title) => {
    // Define the regular expression to match the desired format (numbers and spaces)
    const regex = /^\d+$/;  
    if (regex.test(title)) {
      setInputValue(title);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Nol Tag ID</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.input}
        placeholder="eg: 100 000 0000"
        placeholderTextColor="grey"
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <Pressable 
        onPress={() => {
          if(inputValue = [])



        }}
        style={styles.Nolbutton}>
        <Text style={styles.title}>Connect</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    color: 'white',
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
  },
  Nolbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 95,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'darkgrey',
    marginTop: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
