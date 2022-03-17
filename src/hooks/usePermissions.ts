import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import Constants from 'expo-constants';
import { useEffect, useState } from 'react'

export interface DataLocation extends DataCoord{
  city: string | null;
  country: string | null;
  district: string | null;
  isoCountryCode: string | null;
  name: string | null;
  postalCode: string | null;
  region: string | null;
  street: string | null;
  subregion: string | null;
  timezone: string | null;
}
export interface DataInitial{
  latitude: number,
  longitude: number
}

export interface DataCoord{
  latitude: number
  longitude: number
}

export default function usePermissions(){
  const [regionInitial, setRegionInitial] = useState({} as DataInitial);
  const [errorMsg, setErrorMsg] = useState<string>()

  async function RequestPermissionLocation(){
    if(Constants.isDevice){
      const { status: existingStatus } = await Location.requestForegroundPermissionsAsync()
      let finalStatus = existingStatus
      
      if(existingStatus !== 'granted'){
        const { status } = await Location.requestForegroundPermissionsAsync()
        finalStatus = status
      }
  
      if(existingStatus !== 'granted'){
        alert('Permission to access location was denied');
        return;
      }

    }
  }

async function getLocationAsync(): Promise<DataInitial> {
  return new Promise(async (resolve)=>{
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
 }

const location = await Location.getLastKnownPositionAsync({})

if(location == null){
  await Location.getCurrentPositionAsync({accuracy: 6})
  return
}

const { latitude, longitude } = location.coords;

return resolve({latitude, longitude})
  })
 
}

  return { getLocationAsync ,RequestPermissionLocation,getRegionInitial: regionInitial, errorMsg}
}