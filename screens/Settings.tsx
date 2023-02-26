import { StyleSheet, Image, TextInput, Pressable, Alert } from 'react-native';
import React, {useState} from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Settings({ navigation }: RootTabScreenProps<'Settings'>) {
  return (
    <View style={styles.container}>
        <Pressable
        style={styles.acc}
        onPress={() => navigation.navigate('Account')}>
        <Text style={styles.title}>Account Settings</Text>
        </Pressable>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

     

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
    fontSize: 20,
    fontWeight: 'bold',
    margin: 30,
  },
  acc:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 110,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'darkgrey',
    marginTop: 65,

  },
  number: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 50,
    justifyContent: 'flex-start',

  },
  input: {
    borderWidth: 1,
    color: 'white',
    borderColor: '#777',
    padding: 8,
    margin: 0,
    width: 220,
    marginRight: 20,
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 35,
  },
  Careembutton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 95,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'pink',
    marginTop: 30,
  },
  separator: {
    marginVertical: 30,
    height: 5,
    width: '90%',
  },
});


