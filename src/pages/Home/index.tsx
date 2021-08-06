import React from 'react';

import { Feather } from '@expo/vector-icons';

import wateringImg from '../../assets/watering.png';
import { theme } from '../../global/styles/theme';
import { useNavigation, CommonActions } from '@react-navigation/native';

import {
  Container,
  Content,
  Title,
  Image,
  Subtitle,
  NextButton,
} from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'IdentificationScreen',
      })
    );
  }


  return (
    <Container>
      <Content>
        <Title>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Title>

        <Image source={wateringImg} resizeMode="contain" />

        <Subtitle>
          Não esqueça mais de regar suas {'\n'}
          plantas. Nós cuidamos de lembrar você {'\n'}
          sempre que precisar.
        </Subtitle>

        <NextButton
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather name="chevron-right" size={24} color={theme.colors.white} />
        </NextButton>
      </Content>
    </Container>
  );
}