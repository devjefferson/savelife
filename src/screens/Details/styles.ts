import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    height: ${Dimensions.get("window").height}px ;
`

  export const Header = styled.View`
    width: 100%;
    position: relative;
  `
  export const MapStatic = styled.Image`
    width: 100%;
    height: ${RFPercentage(25)}px;
  `
  export const Category = styled.Text`
    width: 100%;
    font-family: ${({theme})=> theme.fonts.bold};
    font-size: ${RFValue(28)}px;
    color: ${({theme})=> theme.colors.primary};
    text-transform: capitalize;
    bottom: 10px;
    text-align: center;
    line-height: ${RFValue(32)}px ;
    position: absolute;
  `
export const ScrollView = styled.ScrollView`
  flex: 1;
`
export const Body = styled.View`
  width: 100%;
  padding: 25px 20px 0px 20px;

`
export const Detail = styled.Text`
  font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme})=> theme.colors.primary};
  text-align: justify;
  padding: 0 10px;
  margin-bottom: 15px;
`


export const Board = styled.Text`
font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme})=> theme.colors.primary};
`
export const Label = styled.Text`
  font-family: ${({theme})=> theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({theme})=> theme.colors.primary};
`
export const Location = styled.View`
margin-bottom: 15px;
`
export const Street = styled.Text`
font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme})=> theme.colors.primary};
 
  padding: 0 10px;
`
export const City = styled.Text`
font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme})=> theme.colors.primary};
 
  padding: 0 10px;
`
export const DateOcurrence = styled.View`
margin-bottom: 15px;
`
export const DateHour = styled.Text`
  font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme})=> theme.colors.primary};
 
  padding: 0 10px;
`

export const Form = styled.View`
 width: 100%;
`
export const InputName = styled.TextInput`
  height: ${RFValue(48)}px;
  border-width: 1px;
  border-color: ${({theme})=> theme.colors.text};
  border-radius: 5px;
  font-family: ${({theme})=> theme.fonts.medium};
  padding: 0 20px;
  text-transform: capitalize;
  margin-bottom: 15px;
`
export const InputMessage = styled.TextInput`
  height: ${RFValue(120)}px;
  border-width: 1px;
  border-color: ${({theme})=> theme.colors.text};
  border-radius: 5px;
  font-family: ${({theme})=> theme.fonts.medium};
  padding: 15px 20px;
`


export const ContentButton = styled.View`
  position: absolute ;
  width: 100% ;
  bottom: 20px;

 margin: 10px 0;
 padding: 0 20px;
`
export const ButtonSend = styled.TouchableOpacity`
  width: ${RFValue(130)}px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px 32px;
  background-color: ${({theme})=> theme.colors.secondary};
 
`

export const TextButton = styled.Text`
font-family: ${({theme})=> theme.fonts.bold};
color: ${({theme})=> theme.colors.primary};
font-size: ${RFValue(16)}px;
`

export const Footer = styled.View`
  width: 100%;
  padding: 0 20px;
`
export const Comments = styled.View`
  border-width: 0.8px;
  border-color: ${({theme})=>theme.colors.text};
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
`
export const Author = styled.Text`
  text-transform: capitalize;
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=> theme.fonts.regular};

`
export const TitleComment = styled.Text`
  text-transform: capitalize;
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=> theme.fonts.regular};

`
export const Message = styled.Text`
  font-size: ${RFValue(14)}px;
  padding-left: 10px;
  font-family: ${({theme})=> theme.fonts.regular};
  margin-bottom: 10px;
`

export const ContentData = styled.View`
  width: 100%;
  margin-top: 15px;
`
export const CommentDate = styled.Text`
  text-align: right;
  font-size: ${RFValue(12)}px;
  font-family: ${({theme})=>theme.fonts.light};
  color: ${({theme})=>theme.colors.primary}
`