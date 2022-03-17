import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"

import AppContext from '../Provider';
import { SocialLogin } from '../screens/SocialLogin';
import { AppRoutes } from './app.routes';
import SelectPinMap from '../screens/SelectPinMap';
import { SubmitFormCreater } from '../screens/SubmitFormCreater';
import { Details } from '../screens/Details';


const { Screen, Navigator } = createStackNavigator()
export function StackRoutes() {

  const [signed, setSigned] = useState(false)


  useEffect(() => {
    verificad()
    return () => {
      new AbortController().abort()
    }
  }, [])

  async function verificad() {
    const user = await AsyncStorage.getItem("@SL:user");
    !user && setSigned(true);
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,

      }}
    >
      {
        !signed ? (
          <>
            <Screen
              name='Home'
              component={AppRoutes}

            />
            <Screen
              name='SocialLogin'
              component={SocialLogin}

            />
            <Screen
              name='SelectPinMap'
              component={SelectPinMap}

            />
            <Screen
              name='SubmitFormCreater'
              component={SubmitFormCreater}

            />
            <Screen
              name='Details'
              component={Details}

            />

          </>) : (<>
            <Screen
              name='Home'
              component={AppRoutes}

            />
            <Screen
              name='SelectPinMap'
              component={SelectPinMap}

            />
            <Screen
              name='SubmitFormCreater'
              component={SubmitFormCreater}

            />

            <Screen
              name='Details'
              component={Details}

            />

            <Screen
              name='SocialLogin'
              component={SocialLogin}

            />

          </>)
      }
    </Navigator>

  )
}
