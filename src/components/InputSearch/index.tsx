import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container
} from './styles'

interface DataInput extends TextInputProps {
  
}

export function InputSearch({...props }: DataInput) {

  return (
      <Container
      {...props}
    /> 
   
  )}