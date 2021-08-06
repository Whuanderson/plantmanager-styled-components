import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import avatar from '../../assets/avatar.png'

import {
  Container,
  Title,
  Avatar,
  UserName,
  TextView,
} from './styles';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(()=> {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || '');
    }

    loadStorageUserName();
  },[]);

  return (
    <Container>
      <TextView>
        <Title>Olá,</Title>
        <UserName> {userName} </UserName>
      </TextView>
      <Avatar source={avatar} />
    </Container>
  );
}