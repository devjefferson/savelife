import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  justify-content: center;
  background-color: ${({theme})=> theme.colors.primary};
`
export const Header = styled.View`
  padding: 0 10px;
  width: 100%;
  height: ${RFPercentage(15)}px;
  flex-direction: row;
  align-items: flex-end;
  background-color: ${({theme})=> theme.colors.secondary};
  justify-content: center;
`
export const ContentPhoto = styled.View`
  border-radius: 100px;
  
  border-width: 2px;
  border-color: ${({theme})=> theme.colors.primary};
  bottom: -15px;
  margin-right: 10px ;
`
export const Photo = styled(Image)`
  
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: 100px;

`
export const ContentInfo = styled.View`
  margin-bottom: 5px;
  flex: 1;
`
export const Name = styled.Text`
  line-height: ${RFValue(30)}px;
  font-size: ${RFValue(26)}px;
  font-family: ${({theme})=> theme.fonts.bold};
  color: ${({theme})=> theme.colors.primary};
  text-transform: capitalize;
`

export const Email = styled.Text`
  font-size: ${RFValue(11)}px;
  line-height: ${RFValue(13)}px;
  font-family: ${({theme})=> theme.fonts.regular};
  color: ${({theme})=> theme.colors.primary};
`
export const Logout = styled(RectButton)`
    margin-bottom: 10px;
`
export const LogoutText = styled.Text`
  font-family: ${({theme})=> theme.fonts.bold};
`
export const FlatList = styled.FlatList`
  padding: 0 10px;
`
export const IconLogout = styled(MaterialIcons)`
  font-size: ${RFValue(26)}px;
  color: ${({theme})=> theme.colors.primary};
`
export const TextLabel = styled.Text`
  text-align: center;
  font-size: ${RFValue(16)}px;
  font-family: ${({theme})=> theme.fonts.bold};
  color: ${({theme})=> theme.colors.secondary};
`