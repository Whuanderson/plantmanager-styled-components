import React from 'react';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/load.json'

import {
  Container,
} from './styles';

export function Load() {
  return (
    <Container>
      <LottieView
        source={loadAnimation}
        style={{ height: 200 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}