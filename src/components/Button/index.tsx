import React from 'react';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps{
  title: string;
}

import {
 Container,
 Text,
} from './styles';

export function Button({title, onPress, ...rest} : Props){
 return (
   <Container onPress={onPress} {...rest}>
     <Text>
       {title}
     </Text>
   </Container>
 );
}