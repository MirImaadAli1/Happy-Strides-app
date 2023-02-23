import { StyleSheet, Image, TextInput, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Rewards({ navigation }: RootTabScreenProps<'Rewards'>) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.Nol}
        onPress={() => navigation.navigate('Nol')}>
        <Text style={styles.title}>Nol</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable
        style={styles.Careem}
        onPress={() => navigation.navigate('Careemdelivery')}>
        <Text style={styles.title}>Careem Delivery</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable
        style={styles.Noondelivery}
        onPress={() => navigation.navigate('Noondelivery')}>
        <Text style={styles.title}>Noon Delivery</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable
        style={styles.Instashop}
        onPress={() => navigation.navigate('Instashop')}>
        <Text style={styles.title}>Instashop</Text>
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
    marginTop: 65,
  },
  Noondelivery:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 110,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'darkgrey',
    marginTop: 1,
  },
  Instashop:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 110,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'darkgrey',
    marginTop: 5,
  },
  Careem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 110,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'darkgrey',
    marginTop: 5,
  },

  separator: {
    marginVertical: 30,
    height: 10,
    width: '90%',
  },
});
