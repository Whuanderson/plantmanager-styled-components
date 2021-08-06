import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  active: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
 background-color: ${({theme}) => theme.colors.shape};
 width: 76px;
 height: 40px;
 justify-content: center;
 align-items: center;
 border-radius: 12px;
 margin: 0 5px;

 ${(props) =>
    props.active && css`
    background-color: ${({ theme }) => theme.colors.green_light} ;
    `}

`;

export const Title = styled.Text<ContainerProps>`
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.text};

  ${(props) =>
    props.active && css`
    font-family: ${({theme}) => theme.fonts.heading};
    color: ${({theme}) => theme.colors.green_dark};
    font-weight: 600;
    `}

`;