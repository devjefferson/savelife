import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;

`

export const Header = styled.View`
  width: 100%;
  height: 75%;
  background-color: ${({theme})=> theme.colors.primary};

  justify-content: flex-end;
  align-items: center;
`
export const TetleWrapper = styled.View`
  align-items: center;
`
export const Title = styled.Text`
  font-family:  ${({theme})=> theme.fonts.medium};
  color: ${({theme})=> theme.colors.shape};
  font-size: ${RFValue(30)}px;

  text-align: center;
  margin-top: 45px;

`

export const SignInTitle= styled.Text`
  font-family:  ${({theme})=> theme.fonts.medium};
  color: ${({theme})=> theme.colors.shape};
  font-size: ${RFValue(16)}px;

  text-align: center;
  margin-top: 80px;
  margin-bottom: 67px;
`

export const Footer = styled.View`
  width: 100%;
  height: 25%;
  background-color: ${({theme})=> theme.colors.secondary};
` 

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-6)}px;
  padding: 0 32px;
  justify-content: space-between;
`

export const Input = styled.TextInput`
  width: 100%;
  background-color: ${({theme})=> theme.colors.shape} ;
  margin-bottom: 10px;
  height: 48px;
  border-radius: 5px ;
  padding: 5px 10px ; 
  font-family:  ${({theme})=> theme.fonts.medium};
`
export const Button = styled(RectButton)`
  height: 48px ;
  width: 100%;
  background-color: ${({theme})=> theme.colors.primary};
  justify-content: center ;
  align-items: center ;
  border-radius: 5px ;
`
export const TextButton = styled.Text`
  font-family:  ${({theme})=> theme.fonts.medium};
  color: ${({theme})=> theme.colors.shape};
  font-size: ${RFValue(20)}px;
`