import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { DataCoord } from "./usePermissions";

export default function useManegerAsyncStorage() {
  const [error, setError] = useState<string>()
  const [userLocal, setUserLocal] = useState<boolean>(false)

  useEffect(()=>{
    getUsernameStarted()
  
    return ()=>{
      new AbortController().abort()
    }
  },[])

  async function getUsernameStarted() {
    const username = await AsyncStorage.getItem("@SL:user")
    if(username){
      setUserLocal(true)
    } 
  }

  async function setLastLocation(data: DataCoord) {
    await AsyncStorage.setItem("@SL:lastlocation", JSON.stringify(data)) 
  }





  return { getUsernameStarted,setLastLocation, userLocal, error }
}