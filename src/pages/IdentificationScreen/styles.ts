import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
`;

export const Form = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 54px;
`;

export const Emoj = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  line-height: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-top: 20px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.heading};
  width: 100%;
  font-size: ${RFValue(18)}px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;