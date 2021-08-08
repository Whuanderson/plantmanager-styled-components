import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 align-items: center;
 justify-content: space-between;
 padding: 0 30px;
 padding-top: 20px;
 background-color: ${({theme}) => theme.colors.background};
`;

export const Spotlight = styled.View`
  background-color: ${({theme}) => theme.colors.blue_light};
  padding: 0 20px ;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotlightTitle = styled.Text`
  flex: 1;
  color: ${({theme}) => theme.colors.blue};
  padding: 0 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${({theme}) => theme.fonts.heading};
  color: ${({theme}) => theme.colors.heading};
  margin: 20px 0;
`;

export const Text = styled.Text``;
