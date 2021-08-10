import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
 flex: 1;
`;

export const Content = styled.View`
 flex: 1;
 align-items: center;
 justify-content: space-around;
 padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  margin-top: ${getStatusBarHeight() + 38}px;

  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 34px;
`;

export const Image = styled.Image`
  height: 284px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  padding: 0px 20px;

  color: ${({ theme }) => theme.colors.heading};

  font-family: ${({ theme }) => theme.fonts.text};
`;

export const NextButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;
