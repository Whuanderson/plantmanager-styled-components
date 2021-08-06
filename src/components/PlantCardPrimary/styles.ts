import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  data: {
    name: string;
    photo: string;
  }
}

export const Container = styled(RectButton)<ContainerProps>`
 flex: 1;
 max-width: 45%;
 background-color: ${({theme}) => theme.colors.shape};
 border-radius: 20px;
 padding: 10px 0;
 align-items: center;
 margin: 10px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.green_dark};
  font-family: ${({theme}) => theme.fonts.heading};
  margin: 16px 0;
`;