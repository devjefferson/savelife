import React from 'react';
import { Alert, Animated, Image, StyleSheet, View } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Trash from '../../image/profile/trash.png'

import { DataOccurrence } from '../../hooks/useOccurrence';
import { CardOcorrencePrimary } from '../CardOcorrencePrimary';
import theme from '../../global/styles/theme';

interface CardOcorrenceProps extends RectButtonProperties {
  data: DataOccurrence,
  index: number,
  deleteOcorrence(): void
  onClick(): void
}

export function CardProfileOccurrence({ data, index, deleteOcorrence, onClick, ...rest }: CardOcorrenceProps) {

  function handleDelete(params: DataOccurrence) {
    Alert.alert("Remover", `Deseja remover a esse ${params.category == 'route' ? "Corredor Humanitário" : params.category == 'assalt' ? 'Zona de Conflito' : "Bombardeio"}`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async function () {
          try {
            deleteOcorrence()

          } catch (error) {

            Alert.alert('Não foi possivel Remover!')
          }
        },
      },
    ])

  }

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={() => handleDelete(data)}
              {...rest}
            >
              <Image source={Trash} style={styles.imageTrash} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <CardOcorrencePrimary
        data={data}
        index={index}
      />
      
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  buttonRemove: {
    width: 150,
    height: 130,
    backgroundColor: theme.colors.attention,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    right: 30,
    paddingLeft: 15,
  },
  imageTrash: {
    height: 40,
    width: 28.58
  }

})

