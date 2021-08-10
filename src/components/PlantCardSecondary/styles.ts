import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  data: {
    name: string;
    photo: string;
  }
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.shape};
  margin: 5px 0;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${({theme}) => theme.fonts.heading};
  color: ${({theme}) => theme.colors.heading};
  font-size: ${RFValue(17)}px;
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.text};
  color: ${({theme}) => theme.colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.heading};
  color: ${({theme}) => theme.colors.body_dark};
`;

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 85px;
  background-color: ${({theme}) => theme.colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
`;