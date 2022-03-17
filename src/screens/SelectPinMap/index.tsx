import React, { useContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { useTheme } from "styled-components";
import { MapEvent, Marker } from "react-native-maps";


import { useNavigation } from "@react-navigation/core";

import AppContext from "../../Provider";
import { Button} from '../../components/Button'
import { DataInitial } from "../../hooks/usePermissions";


import {
  Container,
  Header,
  Title,
  ContentInputSearch,
  Indicator,
  IndicatorText,
  ErrorContainer,
  ErrorText,
  MapViewContent,
  ButtonNext
} from './styles'

interface DataLocation{
  latitude: number
  longitude: number
} 

import { Text } from "react-native";
import { InputSearch } from "../../components/InputSearch";
import { ButtonSearch } from "../../components/ButtonSearch";

 
const SelectPinMap: React.FC = () => {
  const [regionInitial, setRegionInitial] = useState<DataInitial>();
  const [regionNew, setRegionNew] = useState<string>();
  const [error, setError] = useState("");
  const [locationData, setLocationData] = useState<DataLocation>();
  
  const { signed, getLocationAsync, setOcurrence} = useContext(AppContext);
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  } as DataInitial);
 

  const navigation = useNavigation() as any
  
  const theme = useTheme()

  useEffect(() => {
    getLocationAsync().then(data=> {
      setRegionInitial(data);
    })
    

    return () => {
      new AbortController().abort()
    }
  },[]);

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
    getLocation(event.nativeEvent.coordinate).then(
      (data: Location.LocationGeocodedAddress[]) => {
        setLocationData(data[0] as any);
      }
    );
  }

  async function getLocation(data: any) {
    return await Location.reverseGeocodeAsync(data);
  }

  function NexpMapPosition() {
    
    if (position.latitude === 0 && locationData != undefined || null) {
      setError("Selecione um ponto no mapa");
      return
    }
    if(position.latitude == 0){
      setError("Selecione novamente um ponto no map");
      return
    }

    if(locationData == undefined){
      setError("Selecione novamente um ponto no map");
      return
    }

    navigation.navigate(
      "SubmitFormCreater",
      Object.assign({}, position, locationData)
    );
  
  }

  async function searchLocation(){
    const result = await Location.geocodeAsync(regionNew as string)
    const { latitude, longitude } = result[0]
  
    setRegionInitial({latitude, longitude})
    setPosition({latitude, longitude})
    
    getLocation({latitude, longitude}).then(
      (data: Location.LocationGeocodedAddress[]) => {
        setLocationData(data[0] as any);
      }
    );
  }

  if (!signed) {
    navigation.navigate("Login");
  }
  if (!regionInitial) {
    return <Text>Loads</Text>;
  }
  return (
    <Container>
       {error ? (
        <ErrorContainer>
          <ErrorText>{error}</ErrorText>
        </ErrorContainer>
      ) : (
        <Indicator>
        <IndicatorText>Indique o Local da Ocorrência.</IndicatorText>
        </Indicator>
      )}

        
      <Header>
        <Title>
          Indique o local
        </Title>
        <ContentInputSearch>
          <InputSearch
            onChangeText={setRegionNew}
            placeholder="Cidade, bairro ou cep..."
          />
          <ButtonSearch 
            onPress={searchLocation}
          />
        </ContentInputSearch> 

      </Header>
      <MapViewContent
        region={{
          latitude: regionInitial.latitude,
          longitude: regionInitial.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421,
        }}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            pinColor={theme.colors.primary}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          /> 
        )}
      </MapViewContent>

      <ButtonNext>
        <Button title="Próximo" onPress={NexpMapPosition}/>
      </ButtonNext>
     
    </Container>
  );
};

export default SelectPinMap;
