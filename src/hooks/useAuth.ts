import { useEffect, useState } from "react";
import * as AuthSession from 'expo-auth-session'
import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup } from "firebase/auth";
import { app, auth } from "../Services";
import * as Updates from 'expo-updates';

import AsyncStorage from "@react-native-async-storage/async-storage"
import { View } from "react-native";


export interface DataUserSignedProps{
  uid: string;
  name: string;
  email: string;
  photo?: string
  token: string
}

interface AuthorizationResponse{
  params:{
    access_token: string;
  }
  type: string
}
export default function useAuth(){
  const [userData, setUserData] = useState<DataUserSignedProps | undefined>();

  useEffect(() => {
    checkUserStorage()
    
    return ()=>{
      new AbortController().abort()
    }
  }, []) 

  async function checkUserStorage() {
    const User = await AsyncStorage.getItem("@SL:user");
      if (!User) {
        return
      }
      setUserData(JSON.parse(User))
  }

  async function SignOut() {
    AsyncStorage.multiRemove(["@SL:user"]).then(() => {
      setUserData(undefined)
    })
    Updates.reloadAsync()
  }

  async function signInWithGoogle(){
    try {
      const CLIENT_ID= '1076492693154-bhehvkdnt6d7au6mil19lsqasa6l84tq.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@ndiesuper/savelife';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}` 
      
      const data = await AuthSession
      .startAsync({
        authUrl: authUrl
      }) as AuthorizationResponse
      if (data.type === 'success'){
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${data.params.access_token}`)
        const userInfo = await response.json()
        
      
      const googleCredential = GoogleAuthProvider.credential(null, data.params.access_token)
      await signInWithCredential(auth, googleCredential)

      await AsyncStorage.setItem(
        "@SL:user",
        JSON.stringify({
          uid: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture,
          token: data.params.access_token
        })
      )
        

    }
    Updates.reloadAsync()

    } catch (error: any) {
        throw new Error(error)
    }
  }

  return {
    signInWithGoogle,
    userData,
    SignOut
  }
} 