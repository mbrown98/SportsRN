import { StyleSheet, View } from 'react-native';
import { Game, Home } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
