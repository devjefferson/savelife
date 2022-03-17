import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/core";

import { useFocusEffect } from "@react-navigation/native";


import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Container,
  MapContainer, 
  MapView,
  WrapperFooter
} from "./styles";
import AppContext from "../../Provider";
import ImagePin from "../../utils/ImagePin";
import { ButtonIconRadius } from "../../components/ButtonIconRadius";
import { DataOccurrence } from "../../hooks/useOccurrence";
import { Load } from "../../components/Load";


const MapScreen: React.FC = () => {
  const [filterdDay, setFilterdDay] = useState<number | any>(30);
  const [list, setList] = useState<DataOccurrence[]>();
  const [regionInitial, setRegionInitial] = useState<any>()

  const navigation = useNavigation() as any
  
  const { 
    signed, 
    getLocationAsync,
    getOccurrence, 
    userLocal, 
    setLastLocation,
    userData
  } = useContext(
    AppContext
  );


  useEffect(()=>{
    getLocationAsync().then(data=> {
      setLastLocation(data)
      setRegionInitial(data)
      
    }) 

    async function LocationLastLocal(){
      const locations = await AsyncStorage.getItem("@SL:lastlocation") as any
      setRegionInitial(JSON.parse(locations))
    }

    if(!regionInitial){
      LocationLastLocal()
    }
  
    return ()=> {
      new AbortController().abort()
    }
  },[userLocal])

  useFocusEffect(useCallback(()=>{
    getOccurrence().then((data)=>{
      setList(data.list)
    }) 
  },[]))

  async function handleCreaterNewOccurrence(){
    if(!signed){
      navigation.navigate('SocialLogin')
    }else{
      navigation.navigate("SelectPinMap");
    }
  }
  
 
 
  if (!regionInitial || !list) {
    return <Load/>
  }

  return (
    <Container>
      <MapContainer>
        <MapView
          initialRegion={{
            latitude: regionInitial.latitude,
            longitude: regionInitial.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}

        >
          {list.map((items: any) => {
            return (
              <Marker
                key={items.id}
                coordinate={{
                  latitude: items.latitude,
                  longitude: items.longitude,
                }}
                image={ImagePin(items.category)}
                style={{ width: 50, height: 50 }}
              >
              </Marker>
            );
          })}

        </MapView>
        <WrapperFooter>
          <ButtonIconRadius
            onPress={handleCreaterNewOccurrence}
            icon="plus"
          />
        </WrapperFooter>
      </MapContainer>
    </Container>
  );
}

export default MapScreen;
