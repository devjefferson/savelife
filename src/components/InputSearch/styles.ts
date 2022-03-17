import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  background-color: ${({theme})=> theme.colors.shape};
  flex: 1;
  height: ${RFValue(43)}px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0 10px;
  margin-right: 1px;
`