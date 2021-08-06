import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
 flex-direction: row;
 width: 100%;
 justify-content: space-between;
 align-items: center;
 margin-top: ${getStatusBarHeight()}px;
 padding: 20px 0;
`;

export const TextView = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.text};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(32)}px;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.heading};
  line-height: 40px;
`;


export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;
