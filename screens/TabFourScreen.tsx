import { StyleSheet, Image, TextInput, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Pedometer } from 'expo-sensors';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';


export default function TabFourScreen() {


  const [PedometerAvailability, setPedometerAvailability] =
    useState("");
  const [stepcount, updateStepcount] = useState(0);

  useEffect(() => {
    subscribe();

  }, [])


  subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
      updateStepcount(result.steps);
    })


    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedometerAvailability(String(result))
      },
      (error) => {
        setPedometerAvailability(error)
      }
    )
  }


  Pedometer.isAvailableAsync().then(
    (result) => {
      setPedometerAvailability(String(result))
    },
    (error) => {
      setPedometerAvailability(error)
    }
  )


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{PedometerAvailability}</Text>
      <Text style={styles.title}>{stepcount}</Text>



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
  separator: {
    marginVertical: 30,
    height: 5,
    width: '90%',
  },
});
