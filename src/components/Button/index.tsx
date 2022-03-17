import React from 'react';
import { Dimensions, StyleSheet, Text, Image } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

interface ButtonData extends RectButtonProperties{
  title?: string,
  icon?: any,
  w?: number,
  h?: number
}

export function Button({title, ...rest}:ButtonData){
  return(
    <Container {...rest}> 
      <Title>{title}</Title>
    </Container>
  )
}
