import React from 'react';

import { TextInputProps } from 'react-native';

import {
 Container,
} from './styles';


export function Input({placeholder}: TextInputProps){
 return (
   <Container placeholder={placeholder} >

   </Container>
 );
}