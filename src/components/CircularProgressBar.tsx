import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const EMPTY_COLOR = '#a0a0a1';
const PROGRESS_COLOR = '#0085FF';
const SIZE = 200;

export default function CircularProgressBar(progress = 50) {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const animateProgress = useRef((toValue: number) => {
    Animated.spring(animatedProgress, {
      toValue,
      useNativeDriver: true,
    }).start();
  }).current;

  useEffect(() => {
    animateProgress(progress);
  }, [animateProgress, progress]);

  const firstIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorVisibility = animatedProgress.interpolate({
    inputRange: [0, 49, 50, 100],
    outputRange: [0, 0, 1, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.EmptyCircle}>
      <Animated.View
        style={[
          styles.Indicator,
          {
            transform: [
              {
                rotate: firstIndicatorRotate,
              },
            ],
          },
        ]}
      />
      <View style={styles.CoverIndicator} />
      <Animated.View
        style={[
          styles.Indicator,
          {
            transform: [
              {
                rotate: secondIndicatorRotate,
              },
            ],
          },
          {
            opacity: secondIndicatorVisibility,
          },
        ]}
      />
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
    transform: [{rotate: '-45deg'}],
  },
  Indicator: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 15,
    position: 'absolute',
    borderLeftColor: PROGRESS_COLOR,
    borderTopColor: PROGRESS_COLOR,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  CoverIndicator: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 15,
    borderLeftColor: EMPTY_COLOR,
    borderTopColor: EMPTY_COLOR,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
});
