import { StyleSheet, TextInput, Button, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Nol Tag ID</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.input}
        placeholder="eg: 100 000 0000"
        placeholderTextColor="grey"
      />
      <Pressable style={styles.Nolbutton}>
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
