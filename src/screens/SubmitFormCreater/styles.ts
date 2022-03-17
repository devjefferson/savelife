import { Picker } from '@react-native-picker/picker';
import { Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(ScrollView)`
  height: ${Dimensions.get("window").height}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 0 20px 0;
`

export const Header = styled(SafeAreaView)`
  width: 100%; 
  background-color: ${({ theme }) => theme.colors.secondary};
  height: ${RFPercentage(15)}px;
  align-items: center;
`
export const Title = styled.Text`
  position: absolute;
  bottom: ${RFValue(10)}px;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`

export const Body = styled.View`
padding: 20px 20px;
flex: 1;
`
export const Label = styled.Text`
font-family: ${({ theme }) => theme.fonts.bold};
color: ${({ theme }) => theme.colors.shape};
`
export const Select = styled(Picker).attrs({
  styles:{
    borderRadius: 5
  }
})`
  background-color: ${({ theme }) => theme.colors.shape};
  color:  ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 23px;
  border-radius: 5px;
`

export const SelectItem = styled(Picker.Item)`
 font-family: ${({ theme }) => theme.fonts.regular};
 color:  ${({ theme }) => theme.colors.primary};
`
export const ContentLocation = styled.View`
border-radius: 5px;
padding: 10px 15px;
background-color: ${({ theme }) => theme.colors.shape};
`

export const Street = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`
export const City = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`


export const ContentDate = styled.View`
   margin: 23px 0;
  `
export const HourButton = styled(RectButton)`
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    margin:0 0px 23px 0;
  `
export const HourTitle = styled.Text`
   font-family: ${({ theme }) => theme.fonts.medium};
   font-size: ${RFValue(16)}px;
   color: ${({ theme }) => theme.colors.text};
  `
export const Hour = styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 5px 15px;
    border-radius: 5px;
    
  `
export const HourText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
  `

export const DateButton = styled(RectButton)`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin: 5px 0;
  `
export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`
export const DateNew = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5px 15px;
  border-radius: 5px;

`
export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`

export const ContainerButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 15px;
`

export const ContentDetails = styled.View`

`
export const TextInputMultLine = styled.TextInput`
 background-color: ${({ theme }) => theme.colors.shape};
 height: ${RFValue(120)}px;
 padding: 10px;
 font-family: ${({ theme }) => theme.fonts.regular};
 border-radius: 5px;
` 
export const CountLetter =styled.Text`
    position: relative;
    bottom: 30px;
    width: 100%;
    text-align: right;
    padding-right: 10px;
`
