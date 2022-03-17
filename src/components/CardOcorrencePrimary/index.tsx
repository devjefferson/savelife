//import { DataCategoryProps } from 'IntefaceDefalut';
import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { DataOccurrence } from '../../hooks/useOccurrence'
import FormatDataString from '../../utils/FormatDataString';


import {
  Container,
  ButtonCard,
  Header,
  TypeOccurrence,
  CategoryOccurrence,
  CardContent,
  Body,
  LocationTitle,
  Street,
  District,
  DateContainer,
  DateTitle,
  DateOccurrence,
  Footer,
  ContainerIconFooter,
  Icon,
  TextIcon,
  Line,
} from './styles'

interface CardOcorrenceProps extends RectButtonProperties {
  data: DataOccurrence
  index: number
}


export function CardOcorrencePrimary({ data, index, ...rest }: CardOcorrenceProps) {
  return (
    <Container>
      <ButtonCard
        {...rest}
      >

        <Image source={{ uri: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-l+000(${data.longitude},${data.latitude})/${data.longitude},${data.latitude},14/500x300?access_token=pk.eyJ1IjoibmRpZXN1cGVyIiwiYSI6ImNrbnV1cnllMzBhdzUydnBlazd1bGhjZzQifQ.lhPXMZCOVouJ9psnJ-RWdw` }} 
            style={{
              resizeMode: 'cover',
              width: 139.84,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12
            }}/>
        <CardContent>
          <Header>
            <TypeOccurrence>
              Tipo de ocorrência.
            </TypeOccurrence>
            <CategoryOccurrence>
            {data.category == 'route' ? "Corredor Humanitário" : data.category == 'assalt' ? 'Zona de Conflito' : "Bombardeio"}
            </CategoryOccurrence>
          </Header>

          <Body>
            <LocationTitle>
              Localização da ocorrência
            </LocationTitle>
            <Street>
              {data.street ? data.street : data.name}
            </Street>
            <District>
              Bairro: {data.district}
            </District>
            <DateContainer>
              <DateTitle>
                Data da ocorrência
              </DateTitle>
              <DateOccurrence>
                {
                  FormatDataString(data.occurrenceDateAt.seconds)
                }
              </DateOccurrence>
            </DateContainer>
          </Body>

          <Line />
          
          <Footer>
            <ContainerIconFooter>
              <Icon name="visibility" />
              
            </ContainerIconFooter>
            <ContainerIconFooter>
            <Icon name="share" />
              
            </ContainerIconFooter>
          </Footer>

        </CardContent>
      </ButtonCard>
    </Container>
  );
}