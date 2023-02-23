import { StyleSheet, TextInput, Button, Pressable } from 'react-native';

import { Image, ScrollView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';

export default function SignUp(navigation) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.title}>First Name: </Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.title}>Last Name: </Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.title}>Age: </Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.title}>Phone Number: </Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.title}>Email ID: </Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.title}>Password: </Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.title}>Confirm password: </Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.title}>City of residence</Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.title}>Recaptcha</Text>
      </View>
    </ScrollView>
  )
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
    justifyContent: 'center'
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
    margin: 10,
    width: 220,
    marginRight: 20,
    justifyContent: 'flex-end'
  },
  SignUp: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 70,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'darkgrey',
    marginTop: 30,

  },
  Login: {
    paddingVertical: 1,
    paddingHorizontal: 70,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'green',
    marginTop: 0,

  },
  separator: {
    marginVertical: 30,
    height: 10,
    width: '90%',
  },
});
