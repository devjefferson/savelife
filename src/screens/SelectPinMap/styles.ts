import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import MapView, { MapEvent, Marker } from "react-native-maps";
import StylesCustomMap from "../../utils/StyleCustomMap";


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme})=> theme.colors.primary};
  
`

export const Header = styled.View`
  height: ${RFPercentage(15)}px;
  background-color: ${({theme})=>theme.colors.secondary};
  width: 100%;
  justify-content: flex-end;
  padding: 10px 10px;
`

export const Title = styled.Text`
  font-family: ${({theme})=>theme.fonts.medium};
  font-size: ${RFValue(18)}px;
`
export const ContentInputSearch = styled.View`
  flex-direction: row;
`
export const Indicator = styled.View`
  width: 100%;
  position: absolute;
  z-index: 1;
  justify-content: center;
  top: 150px;
`
export const IndicatorText = styled.Text`
  text-align: center;
  color: ${({theme})=>theme.colors.shape};
  font-family: ${({theme})=>theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`

export const ErrorContainer = styled.View`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 150px;
  
`
export const ErrorText = styled.Text`
  text-align: center;
  margin: 0 20px;
  color: ${({theme})=> theme.colors.shape};
  font-family: ${({theme})=>theme.fonts.bold};
  background-color: ${({theme})=> theme.colors.attention};
`
export const MapViewContent =styled(MapView).attrs({
  customMapStyle: StylesCustomMap
})`
  flex: 1;
`
export const ButtonNext = styled.View`
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  bottom: 50px;
`