import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
 flex: 1;
 justify-content: space-between;
 background-color: ${({theme}) => theme.colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.shape};
`;

export const PlantName = styled.Text`
  font-family: ${({theme}) => theme.fonts.heading};
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.heading};
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.text};
  color: ${({theme}) => theme.colors.heading};
  font-size: ${RFValue(17)}px;
  margin-top: 10px;
`;

export const Controller = styled.View`
background-color: ${({theme}) => theme.colors.white};
padding-right: 20px;
padding-left: 20px;
padding-top: 30px;
padding-bottom: ${getBottomSpace() + 20}px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;

`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${({theme}) => theme.fonts.text};
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(17)}px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.complement};
  color: ${({theme}) => theme.colors.heading};
  font-size: ${RFValue(12)}px;
  margin-bottom: 5px;
`;

export const DateTimePickerText = styled.Text`
  color: ${({theme}) => theme.colors.heading};
  font-size: ${RFValue(17)}px;
  font-family: ${({theme}) => theme.fonts.text}
`;
