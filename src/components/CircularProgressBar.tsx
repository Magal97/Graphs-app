import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const EMPTY_COLOR = '#a0a0a1';
const PROGRESS_COLOR = '#0085FF';
const SIZE = 200;

export default function CircularProgressBar(progress = 0) {
  return (
    <View style={styles.EmptyCircle}>
      <View style={styles.Indicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  EmptyCircle: {
    borderColor: EMPTY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 15,
  },
  Indicator: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 15,
    position: 'absolute',
    borderColor: PROGRESS_COLOR,
  },
});
