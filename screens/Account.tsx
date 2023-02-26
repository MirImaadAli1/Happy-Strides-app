import { StyleSheet, TextInput, Button, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Account({ navigation }: RootTabScreenProps<'Account'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Full name </Text>
            <Pressable
            style={styles.name}>
            <Text style={styles.title}></Text>
            </Pressable>
            <Text style={styles.title}> Phone Number </Text>
            <Pressable
            style={styles.name}>
            <Text style={styles.title}></Text>
            </Pressable>
            <Text style={styles.title}> Email ID </Text>
            <Pressable
            style={styles.name}>
            <Text style={styles.title}></Text>
            </Pressable>
            <Text style={styles.title}> Password </Text>
            <Pressable
            style={styles.name}>
            <Text style={styles.title}></Text>
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
      fontSize: 20,
      fontWeight: 'bold',
      margin: 20,
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
    name: {
        borderWidth: 1,
        color: 'white',
        borderColor: '#777',
        padding: 1,
        paddingHorizontal: 100,
        paddingVertical: 1,
        width: 20,
        justifyContent: 'flex-end',
        


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
  
