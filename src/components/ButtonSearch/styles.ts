import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme})=> theme.colors.primary};
  width: ${RFValue(53)}px; 
  border-bottom-right-radius: 5px; 
  border-top-right-radius: 5px;
  justify-content: center;
  align-items: center;
`
export const Icon = styled(MaterialIcons)`
   font-size: ${RFValue(28)}px; 
    color: ${({theme})=>theme.colors.shape};
`