import { StyleSheet, Image, TextInput, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.Nol}
        onPress={() => navigation.navigate('TabTwo')}>
        <Text style={styles.title}>Nol</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable
        style={styles.Careem}
        onPress={() => navigation.navigate('TabThree')}>
        <Text style={styles.title}>Careem</Text>
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
    margin: 10,
    width: 220,
    marginRight: 20,
    justifyContent: 'flex-end'
  },
  Nol: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 110,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'darkgrey',
    marginTop: 30,

  },
  Careem: {


    paddingVertical: 1,
    paddingHorizontal: 95,
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
