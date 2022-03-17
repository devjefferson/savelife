import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'



export const Container = styled.View`
  min-height: ${RFValue(200)}px;
  max-height: 300px;
`

export const ButtonCard = styled(RectButton)`
width: 100%;
flex: 1;
flex-direction: row;
background-color: ${({ theme }) => theme.colors.shape};
margin: 5px 0;
border-radius: 12px;
justify-content: space-evenly;
`;
export const CardContent = styled.View`
  flex: 1;
  padding: 5px 12px;
  justify-content: space-between;
`

export const Header = styled.View`

`
export const TypeOccurrence = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.primary};
`
export const CategoryOccurrence = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: capitalize;
  line-height: ${RFValue(20)}px;
`

export const Body = styled.View`

`
export const LocationTitle = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: ${RFValue(14)}px;
  margin-top: 10px;
`
export const Street = styled.Text.attrs({
  numberOfLines: 1
})`
 font-family: ${({ theme }) => theme.fonts.regular};
 font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: ${RFValue(14)}px;
`
export const District = styled.Text.attrs({
  numberOfLines: 1
})`
font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: ${RFValue(14)}px;
`
export const DateContainer = styled.View``

export const DateTitle = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 5px;
  line-height: ${RFValue(14)}px;
`
export const DateOccurrence = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: ${RFValue(14)}px;
`

export const Footer = styled.View`
  width: 100%;
  flex-direction: row; 
  justify-content: flex-end;

`

export const ContainerIconFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${RFValue(20)}px;
  margin: 0px 5px;

  
`
export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(20)}px; 
  color: ${({theme})=>theme.colors.text};

`
export const TextIcon = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({theme})=>theme.colors.text};
  font-size: ${RFValue(12)}px;
  margin: 0px 5px;
`

export const Line = styled.Text`
  height: 0.8px;
  background-color: ${({ theme }) => theme.colors.text};
  margin: 3px 0;
`