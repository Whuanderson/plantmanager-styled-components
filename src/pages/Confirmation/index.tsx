import React from 'react';
import { Button } from '../../components/Button';

import { useNavigation, CommonActions, useRoute } from '@react-navigation/native';

import {
  Container,
  Content,
  Emoj,
  Title,
  Subtitle,
  Footer,
} from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug',
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}


export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function handleConfirm() {
    navigation.dispatch(
      CommonActions.navigate({
        name: nextScreen,
      })
    );
  }

  return (
    <Container>
      <Content>
        <Emoj>
          {emojis[icon]}
        </Emoj>

        <Title>
          {title}
        </Title>

        <Subtitle>
          {subtitle}
        </Subtitle>

        <Footer>
          <Button
            onPress={handleConfirm}
            title={buttonTitle}
          />
        </Footer>
      </Content>
    </Container>
  );
}