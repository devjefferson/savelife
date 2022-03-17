import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Alert } from 'react-native';
import FormatDataString from '../../utils/FormatDataString';

import { Button } from '../../components/Button';

import { DataOccurrence } from '../../hooks/useOccurrence';
import AppContext from '../../Provider';

import {
  Container,
  Header,
  MapStatic,
  Category,
  ScrollView,
  Body,
  Detail,
  Label,
  Location,
  Street,
  City,
  DateOcurrence,
  DateHour,
  Form,
InputName,
InputMessage,
ContentButton,
ButtonSend,
TextButton,
Footer,
Comments,
TitleComment,
Author,
Message,
ContentData,
CommentDate
} from './styles'
import theme from '../../global/styles/theme';

interface DataOcorrenceProps {
  ocorrenceData: DataOccurrence
}

export function Details() {
  const [message, setMessage] = useState<string>()
  const route = useRoute()
  const navigation = useNavigation() as any
  const { userData } = useContext(AppContext)
  const { ocorrenceData } = route.params as DataOcorrenceProps

  useEffect(() => {
    (async () => {
     // await updateView(ocorrenceData.id)
    })()
    return () => {
      new AbortController().abort()
    }
  }, [handleSubmitComment])




  function handleGoBack() {
    navigation.goBack()
  }

  function handleShared() {
    navigation.navigate("NewShared", { ocorrenceData });
  }

  async function handleSubmitComment(){
    if(!userData){
      Alert.alert("Erro ao comentar", "Você precisa está logado para comentar!",[
        {
          text: "Logar",
          onPress:()=> navigation.navigate('Login')
        },
        { text: "Cancelar", onPress: () =>{}}
      ])
      return 
    }
    /*
    await addComment(ocorrenceData.id, {
      id: userData?.uid,
      name: userData?.name,
      message
    })
    */
  }


  function selectCategory() {
    if (ocorrenceData.category == 'furto' || 'veiculo') {

    }
  }



  if (!ocorrenceData) {
    return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}><Text> Load </Text></View>
  }
  return (
    <Container>
      <Header>
        <MapStatic
          source={{ uri: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l-embassy+F7D016(${ocorrenceData.longitude},${ocorrenceData.latitude})/${ocorrenceData.longitude},${ocorrenceData.latitude},17/600x600?access_token=pk.eyJ1IjoibmRpZXN1cGVyIiwiYSI6ImNrbnV1cnllMzBhdzUydnBlazd1bGhjZzQifQ.lhPXMZCOVouJ9psnJ-RWdw` }}
        />
        <Category>
          {ocorrenceData.category == 'route' ? "Corredor Humanitário" : ocorrenceData.category == 'assalt' ? 'Zona de Conflito' : "Bombardeio"}
        </Category>
      </Header>
      <ScrollView>
      <Body>
        <Label>Descrição da ocorrência:</Label>
        <Detail>{ocorrenceData.details}</Detail>
  
        <Label>Local da ocorrencia:</Label>
        <Location>
          <Street>{ocorrenceData.street ? ocorrenceData.street : ocorrenceData.name}{', '}{ocorrenceData.district}</Street>
          <City>{ocorrenceData.subregion ? ocorrenceData.subregion : ocorrenceData.region}</City>
        </Location>
        
        <Label>Data da ocorrencia</Label>
        <DateOcurrence>
          <DateHour>
            {
              FormatDataString(ocorrenceData.occurrenceDateAt.seconds)
            }
          </DateHour>
        </DateOcurrence>
       
        
         {/* 
         <Form>
            <Label>Deixe seu comentario:</Label>
            <InputName selectTextOnFocus={false} value={userData?.name} />
            <InputMessage
              multiline
              textAlign='left'
              textAlignVertical='top'
              onChangeText={setMessage}
            />
           <ContentButton>
            <ButtonSend onPress={handleSubmitComment}>
                <TextButton>Enviar</TextButton>
              </ButtonSend>
           </ContentButton>
           
        </Form>
        */}
      </Body>
      <Footer>
     
      </Footer>

      </ScrollView>
      <ContentButton>
        <Button 
            onPress={()=> navigation.goBack()}
            title="Voltar"
          />
        </ContentButton>
    </Container>
  );
}