import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { theme } from '../../global/styles/theme';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  View,
  Alert
} from 'react-native';

import {
  Container,
  Form,
  Emoj,
  Title,
  Footer,
  Input,
} from './styles';

export function IdentificationScreen() {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if (!name)
      return Alert.alert('Informar um nome')

    await AsyncStorage.setItem('@plantmanager:user', name);

    navigation.dispatch(
      CommonActions.navigate({
        name: 'Confirmation',
      })
    );
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Form>
            <View style={{ alignItems: 'center' }}>
              <Emoj>
                {isFilled ? '😄' : '🙂'}
              </Emoj>
              <Title>
                Como podemos
                {'\n'} chamar você?
              </Title>
            </View>

            <Input
              style={
                (isFocused || isFilled) && { borderColor: theme.colors.green }
              }
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <Footer>
              <Button
                title="Confirmar"
                onPress={handleSubmit}
              />
            </Footer>
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
