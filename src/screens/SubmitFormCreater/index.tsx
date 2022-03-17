import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, View, Platform, Alert, Modal, Image, TouchableHighlight } from "react-native";
import { useTheme } from 'styled-components';

import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { Button } from "../../components/Button";

import { format, isAfter } from "date-fns";

import theme from '../../global/styles/theme';
import {
  Container,
  Header,
  Title,
  Body,
  Label,
  ContentLocation,
  Street,
  City,
  Select,
  SelectItem,
  ContentDate,
  HourButton,
  HourTitle,
  Hour,
  HourText,
  DateButton,
  DateTitle,
  DateNew,
  DateText,
  ContainerButton,
  TextInputMultLine,
  CountLetter,
  ContentDetails,
} from './styles'
import RefactorText from '../../utils/RefactorText';
import AppContext from '../../Provider';

export function SubmitFormCreater() {
  const [category, setCategory] = useState<string | null>('assalt');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == "ios");
  const [dataType, setDataType] = useState<string>('date');
  const [limit, setLimit] = useState(false)
  const [details, setDetails] = useState<string | null>(null);
  const [letterCount, setLetterCount] = useState(245)
  const [death, setDeath] = useState(false);

  const { setOcurrence, userData } = useContext(AppContext);

  const route = useRoute();
  const navigation = useNavigation() as any
  const theme = useTheme()

  const Params = route.params as any
  useEffect(() => {
    if (!Params) {
      navigation.goBack();
    }

    return () => {
      new AbortController().abort();
    }
  }, []);

  async function handleSubmit() {
    const { city, subregion, country, postalCode, region, district, street } = Params as any
    const tag = []

    tag.push(
      city != null ? RefactorText(city) : null,
      subregion != null ? RefactorText(subregion) : null,
      region != null ? RefactorText(region) : null,
      country != null ? RefactorText(country) : null,
      postalCode != null ? RefactorText(postalCode) : null,
      postalCode,
      category == 'route' ? RefactorText("Corredor Humanitário") : category == 'assalt' ? RefactorText('Zona de Conflito') : RefactorText("Bombardeio"),
      district != null ? RefactorText(district) : null,
      category != null ? RefactorText(category) : null,
      street != null ? RefactorText(street) : null
    )

    if (limit == false) {
      setOcurrence({
        ...Params,
        details,
        category,
        death,
        occurrenceDateAt: selectedDate,
        createdAt: new Date(),
        tag,
        userData: {
          email: userData?.email,
          name: userData?.name,
          uid: userData?.uid,
          photo: userData?.photo
        },
      }).then(() => {
        navigation.navigate("Mapa")
      });
      setLimit(true)
    }
  }


  function handleChangeTime(_: Event | any, dateTime?: Date | undefined | any) {
    if (Platform.OS == "android") {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isAfter(dateTime, new Date()) && category != 'utilidade pública') {
      setSelectedDate(new Date());
      return Alert.alert("Escolha uma data no passado!");
    }

    if (!dateTime) {
      setDataType("date")
      setDataType('time')
      return
    }

    const current = dateTime as Date
    setSelectedDate(current);

  }

  function handleChangeTimeCancel() {

    setSelectedDate(selectedDate)
  }

  function handleOpenDatePickerForAndroid() {

    setDataType("date")
    setShowDatePicker((oldState) => !oldState);

  }

  function handleOpenTimePickerForAndroid() {

    setDataType('time')
    setShowDatePicker((oldState) => !oldState);

  }
  return (
    <Container>
      <Header>
        <Title>Criar Nova Ocorrencia</Title>
      </Header>

      <Body>

        <Label>Select category</Label>
        <Select style={{ color: theme.colors.secondary }} onValueChange={(itemValue) => setCategory(String(itemValue))} selectedValue={category} itemStyle={{ fontFamily: theme.fonts.bold }}>
          <SelectItem label="Troops" value="assalt" />
          <SelectItem label="Bombing" value="bombs" />
          <SelectItem label="Humanitarian Corridor" value="route" />
        </Select>

        <Label>Local</Label>
        <ContentLocation>
          <Street>{Params.street}, {Params.district}</Street>
          <City>{Params.subregion}</City>
        </ContentLocation>

        <ContentDate>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode={dataType as any}
              display="default"
              onChange={handleChangeTime}
              onTouchCancel={handleChangeTimeCancel}

            />
          )}
          <HourButton onPress={handleOpenTimePickerForAndroid}>
            <HourTitle>Hora</HourTitle>
            <Hour>
              <HourText>{`${format(selectedDate, 'HH:mm')}`}</HourText>
            </Hour>
          </HourButton>
          <DateButton onPress={handleOpenDatePickerForAndroid}>
            <DateTitle>Data</DateTitle>
            <DateNew>
              <DateText>{`${format(selectedDate, 'dd/MM/yyyy')}`}</DateText>
            </DateNew>
          </DateButton>
        </ContentDate>
        <ContentDetails>
          <Label>Detalhes do ocorrido.</Label>
          <TextInputMultLine
            multiline
            maxLength={245}
            onChangeText={setDetails}
            textAlignVertical="top"

          />
          <CountLetter>{details ? details?.length - letterCount : letterCount}</CountLetter>
        </ContentDetails>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Sua ocorrência não será cadastrada!");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={styles.containerModal}
          >


            <View style={styles.centeredView} >
              <View style={styles.containerTextImage}>
                <View style={styles.imageContainer}>
                </View>
                <View>

                  <Text style={styles.modalTitle}>Lembrete Importante:</Text>
                  <Text style={styles.modalSubtitle}>
                    As ocorrências geradas no aplicativo Alerta Assalto não possuem valor legal, apenas informativo. Em todos os casos é recomendável entrar em contato com a polícia e realizar o boletim de ocorrência.
                  </Text>
                </View>
              </View>
              <View>

                <View style={styles.containerButton}>
                  <TouchableHighlight style={{ ...styles.buttonModal, backgroundColor: theme.colors.secondary }} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.buttonModal} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableHighlight>
                </View>
              </View>

            </View>

          </View>
        </Modal>
        <ContainerButton>
          <Button title="Cadastrar Ocorrência" onPress={() => setModalVisible(true)} />
        </ContainerButton>
      </Body>
    </Container>
  )
}


const styles = StyleSheet.create({
  lineBorder: {
    borderWidth: 1,
    width: 300,
    borderColor: "#ddd",
    marginVertical: 25,
  },
  count: {
    position: 'relative',
    bottom: 30,
    width: "100%",
    textAlign: 'right',
    paddingHorizontal: 10,
  },
  list: {
    height: 50
  },
  inputPlaca: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#d3e2e6",
  },
  input: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderColor: "#d3e2e6",
    width: 300,
    height: 56,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#FFF",
    textAlignVertical: "top",
  },
  dateTimePickerButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 20,
    borderColor: theme.colors.secondary
  },
  dateTimePickerText: {
    color: theme.colors.secondary,
    fontSize: 24,
    fontFamily: theme.fonts.medium,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: theme.colors.secondary,
    width: Dimensions.get('window').width - 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10
  },
  buttonText: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,

  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(47, 72, 88, 1.2)',

  },
  centeredView: {

    //marginTop: Dimensions.get('screen').height / 3,
    height: 350,
    marginHorizontal: 10

  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100
  },
  modalTitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 24,
    color: theme.colors.background,
    textAlign: "center"

  },
  modalSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    color: theme.colors.background,
    textAlign: "justify",
    paddingHorizontal: 20

  },
  containerButton: {
    flexDirection: 'row'
  },
  containerTextImage: {
    backgroundColor: theme.colors.secondary,
    marginHorizontal: 15,
    borderRadius: 12,
  },
  buttonModal: {
    marginHorizontal: 20,
    backgroundColor: theme.colors.secondary,
    width: 160,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 10
  }
});
