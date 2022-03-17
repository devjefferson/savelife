import React, { useContext, useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useTheme } from 'styled-components'
import { LogBox, Platform } from 'react-native'

import { MaterialIcons, Feather, Foundation } from '@expo/vector-icons'

import { SocialLogin } from '../screens/SocialLogin'
import MapScreen from '../screens/MapScreen'
import { RFValue } from 'react-native-responsive-fontsize'
import SelectPinMap from '../screens/SelectPinMap'
import AppContext from '../Provider'
import { ListOccurrence } from '../screens/ListOccurrence'
import { Profile } from '../screens/Profile'

export function AppRoutes() {
  
  const {Navigator, Screen} = createBottomTabNavigator()
  const theme = useTheme()
  const { signed } = useContext(AppContext)

  

 
  
  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          fontSize: RFValue(14),
          fontFamily: theme.fonts.medium
        },
        
        tabBarStyle:{
          height: 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
       <Screen 
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: (({size, color})=>
           <Feather 
            name="map-pin"
            size={size}
            color={color}
           />
          )
        }}
      />
       <Screen 
        name="Lista"
        component={ListOccurrence}
        options={{
          tabBarIcon: (({size, color})=>
           <Foundation 
            name="list"
            size={size}
            color={color}
           />
          )
        }}
      />
      {
        signed &&  <Screen 
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: (({size, color})=>
           <MaterialIcons 
            name="perm-identity"
            size={size}
            color={color}
           />
          )
        }}
      />
      }
    </Navigator>
  )
}
