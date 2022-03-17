import styled, {css} from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapViewClust from "react-native-map-clustering"
import { TouchableOpacity } from "react-native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import theme from "../../global/styles/theme";
import StylesCustomMap from "../../utils/StyleCustomMap"

interface ButtonProps{
  position: 'left' | 'right'
} 
export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background };

`

export const MapContainer = styled.View`
  flex: 1;

`

export const MapView = styled(MapViewClust).attrs({
  clusterColor: theme.colors.secondary,
  customMapStyle: StylesCustomMap
})`
  flex: 1;
`

export const Button= styled(TouchableOpacity)<ButtonProps>`
  width: ${RFValue(50)}px;
  justify-content: flex-end;
  position: absolute;
  bottom: ${RFValue(35)}px;
  ${({position})=> position === 'left' && css`
      left: ${RFValue(14)}px;
    `}
  ${({position})=> position === 'right' && css`
    right: ${RFValue(14)}px;
  `}
`
export const Image = styled.Image.attrs({
  resizeMode: "contain"
})`
  height: ${RFValue(60)}px;
  width: ${RFValue(55)}px;
  
`

export const WrapperFooter = styled.View`
  position: absolute ;
  bottom: 70px;
  width: 100%;
  padding: 0 20px;
  justify-content: flex-end ;
  align-items: flex-end ;
`