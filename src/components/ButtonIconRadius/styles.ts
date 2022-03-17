import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme})=> theme.colors.primary};
  width: 50px;
  height: 50px ;
  border-radius: 160px ;
  justify-content: center;
  align-items: center;
`
export const Icon = styled(Feather)`
   font-size: ${RFValue(28)}px; 
    color: ${({theme})=>theme.colors.shape};
`