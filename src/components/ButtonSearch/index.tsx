import React from 'react';
import { TouchableOpacityProps } from 'react-native';


import {
  Container,
  Icon
} from './styles'

interface Props extends TouchableOpacityProps{
  onPress(): void
}

export function ButtonSearch({onPress ,...props}: Props) {

  return (
    <Container
      {...props}
      onPress={onPress}
    > 
      <Icon
        name="search"
      />
    </Container>
  )}