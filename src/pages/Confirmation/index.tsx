import React from 'react';
import { Button } from '../../components/Button';

import { useNavigation, CommonActions } from '@react-navigation/native';

import {
  Container,
  Content,
  Emoj,
  Title,
  Subtitle,
  Footer,
} from './styles';


export function Confirmation() {
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'PlantSelect',
      })
    );
  }

  return (
    <Container>
      <Content>
        <Emoj>
          😄
        </Emoj>

        <Title>
          Prontinho
        </Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas
          plantinhas com muito cuidado.
        </Subtitle>

        <Footer>
          <Button
            onPress={handleConfirm}
            title="Começar" />
        </Footer>
      </Content>
    </Container>
  );
}