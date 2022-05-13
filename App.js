import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.paragraph}>
        BettyBoop
      </Text>
      <Button
        color="white"
        title="button"
        onPress={() => Alert.alert('Pressed')}
      />
      <Image style={styles.logo} source={require('./assets/boop.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 228,
    width: 228,
  }
});
