import { StyleSheet, TextInput, Button, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';

export default function Validation({ navigation }) {

  function SignUp() {
    return (
      <View style={styles.container}>
        <Pressable
          style={styles.SignUp}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.title}>Sign Up</Text>
        </Pressable>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Pressable
          style={styles.Login}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.title}>Login</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SignUp />
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
