import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
border-bottom-width: 1px;
border-color: ${({ theme }) => theme.colors.gray};
color: ${({ theme }) => theme.colors.heading};
width: 100%;
font-size: ${RFValue(18)}px;
margin-top: 50px;
padding: 10px;
text-align: center;
`;