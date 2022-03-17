import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import {
  ImageContainer,
  Button,
  Text
} from './styles'

import  GoogleSvg from '../../image/google.png'
import  AppleSvg from '../../image/apple.png'


interface Props extends RectButtonProps {
  title: string;
  type: "google" | "apple"

}
export function SignInSocialButton({
  title,
  type = "google",
  ...rest
}: Props) {

  return (
      <Button {...rest}>
        <ImageContainer>
          <Image source={type === "google" ? GoogleSvg : AppleSvg } resizeMode="contain" width={38} height={38} /> 
          </ImageContainer>
          <Text>
            {title}
          </Text>
        
      </Button>
  )
}