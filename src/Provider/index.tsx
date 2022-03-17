import React, { createContext } from 'react';
import useManegerAsyncStorage from '../hooks/useManegerAsyncStorage';
import usePermissions, { DataCoord, DataInitial } from '../hooks/usePermissions';
import useOccurrence, { DataOccurrence, DataOccurrenceReturn } from '../hooks/useOccurrence';
import useAuth, { DataUserSignedProps } from '../hooks/useAuth';

interface DataProvider{
  signed: boolean
  userData: DataUserSignedProps | undefined
  SignOut(): void
  RequestPermissionLocation(): void
  getLocationAsync(): Promise<DataCoord>
  getRegionInitial: DataInitial
  
  signInWithGoogle(): Promise<void>
  
  setOcurrence(data: DataOccurrence): Promise<void>
  getOccurrence(): Promise<DataOccurrenceReturn>
  getListOccurrence(): Promise<DataOccurrenceReturn>
  getListUpdate(lastItem: any): Promise<DataOccurrenceReturn>
  getOcorrenceUser(uuid: string): Promise<DataOccurrenceReturn>
  getListUserUpdate(lastItem: any, uuid: string): Promise<DataOccurrenceReturn>
  deleteOcorrenceUser(id: string): void
  getListSearchUpdate(lastItem: any, params: string): Promise<DataOccurrenceReturn>
  getListSearch(params: string): Promise<DataOccurrenceReturn>


  getUsernameStarted(): Promise<void | string | null>
  userLocal: boolean
  setLastLocation(data: DataCoord): Promise<void>
}

const AppContext = createContext(
  {} as DataProvider
)


export function AppProvider({children}: any) {

  const {
    RequestPermissionLocation,
    getRegionInitial,
    getLocationAsync
  } = usePermissions()

  const { 
    setOcurrence, 
    getOccurrence,
    getListOccurrence,
    getListUpdate,
    getListSearchUpdate,
    getListSearch,
    getOcorrenceUser,
    getListUserUpdate,
    deleteOcorrenceUser
  } = useOccurrence()

  const {
    getUsernameStarted,
    setLastLocation,
    userLocal
  } = useManegerAsyncStorage()

  const {
    signInWithGoogle,
    userData,
    SignOut
  } = useAuth()

  return (
    <AppContext.Provider
      value={{
        signed: !!userLocal,
        userData,
        RequestPermissionLocation,
        getRegionInitial,
        getLocationAsync,
        getUsernameStarted,
        setLastLocation,
        userLocal,
        setOcurrence,
        getOccurrence,
        getListSearchUpdate,
        getListSearch,
        signInWithGoogle,
        getListOccurrence,
        getListUpdate,
        getOcorrenceUser,
        getListUserUpdate,
        deleteOcorrenceUser,
        SignOut
        

      }}
    > 
      {children}
    </AppContext.Provider>
  )}

  export default AppContext;