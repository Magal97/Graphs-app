import React from 'react';
import {StyleSheet, View} from 'react-native';
import CircularProgressBarComponent from '../src/components/CircularProgressBar';

function App() {
  return (
    <View style={styles.container}>
      <CircularProgressBarComponent progress={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9b9b9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
