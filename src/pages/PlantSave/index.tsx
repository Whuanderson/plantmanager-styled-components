import React, { useState } from 'react';

import { SvgFromUri } from 'react-native-svg';
import { useRoute, useNavigation, CommonActions } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { Platform, Alert } from 'react-native';
import { isBefore, format } from 'date-fns'

import waterdrop from '../../assets/waterdrop.png'
import { Button } from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PlantProps, savePlant } from '../../libs/storage';

import {
  Container,
  PlantInfo,
  PlantName,
  PlantAbout,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  DateTimePickerText,
} from './styles';

interface Params {
  plant: PlantProps
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  const route = useRoute()
  const { plant } = route.params as Params;

  const navigation = useNavigation();

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('O horário escolhido já passou! ⌚')
    }

    if (dateTime)
      setSelectedDateTime(dateTime);
  }

  function handleDatetimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Confirmation',
          params: {
            title: 'Tudo certo',
            subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
            buttonTitle: 'Muito obrigado :D',
            icon: 'hug',
            nextScreen: 'MyPlants'
          }
        })
      );
    } catch {
      return Alert.alert('Não foi possível salvar.')
    }
  }

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri
          uri={plant.photo}
          height={150}
          width={150}
        />

        <PlantName>
          {plant.name}
        </PlantName>

        <PlantAbout>
          {plant.about}
        </PlantAbout>
      </PlantInfo>

      <Controller>
        <TipContainer>
          <TipImage
            source={waterdrop}
          />
          <TipText>
            {plant.water_tips}
          </TipText>
        </TipContainer>

        <AlertLabel>
          Escolha o melhor horário para ser lembrado
        </AlertLabel>

        {showDatePicker && (
          <DateTimePicker
            style={{ height: 96, marginBottom: 20 }}
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {
          Platform.OS === 'android' && (
            <TouchableOpacity
              style={{ width: '100%', alignItems: 'center', paddingVertical: 40 }}
              onPress={handleDatetimePickerForAndroid}
            >
              <DateTimePickerText>
                {`Horário selecionado ${format(selectedDateTime, 'HH:mm')}`}
              </DateTimePickerText>
            </TouchableOpacity>
          )
        }

        <Button
          title="Cadastar planta"
          onPress={handleSave}
        />

      </Controller>
    </Container>
  );
}