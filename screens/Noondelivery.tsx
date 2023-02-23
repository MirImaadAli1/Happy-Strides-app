import { StyleSheet, Image, TextInput, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Noondelivery() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Enter your Phone number</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.number}>+971</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput style={styles.input} />
        </View>
      </View>
      <Pressable style={styles.Careembutton}>
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
    backgroundColor: 'green',
    marginTop: 30,
  },
  separator: {
    marginVertical: 30,
    height: 5,
    width: '90%',
  },
});
