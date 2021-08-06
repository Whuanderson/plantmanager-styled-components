import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 align-items: center;
 justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Emoj = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.heading};
  text-align: center;
  color: ${({theme}) => theme.colors.heading} ;
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.text};
  text-align: center;
  font-size: ${RFValue(17)}px;
  color: ${({theme}) => theme.colors.heading};
  padding: 10px 0px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
`;
