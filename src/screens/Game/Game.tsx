import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Game = () => {
  return (
    <View style={styles.container}>
      <Text>Game</Text>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
