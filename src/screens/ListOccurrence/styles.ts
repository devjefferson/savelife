import { Dimensions, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { DataOccurrence } from '../../hooks/useOccurrence';

export const Container = styled(SafeAreaView)`
   background-color: ${({theme})=> theme.colors.background};
   height: ${Dimensions.get('window').height}px;
  
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
  font-size: ${RFValue(22)}px;
`
export const ContentInputSearch = styled.View`
  flex-direction: row;
`
export const StyledFlatList  = styled(FlatList as new () => FlatList)`
 padding: 0 10px;
 flex: 1
`