import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
 flex: 1;
 background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.text};
  line-height: 20px;
`;

export const HeaderStyle = styled.View`
  padding: 0 30px;
  margin-top: 20px;
`;

export const ButtonsList = styled.View``

export const CardList = styled.View`
  flex: 1;
  padding: 0 32px;
  justify-content: center;
`
