import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Icon
} from './styles'


interface Props extends TouchableOpacityProps{
  onPress(): void,
  icon?: string
}
export function ButtonIconRadius({onPress, icon= 'plus' ,...props}: Props) {

  return (
    <Container
    {...props}
    onPress={onPress}
  > 
    <Icon
      name={icon}
    />
  </Container>
  )}