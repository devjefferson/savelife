import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import AppContext from "../../Provider";
import { CardProfileOccurrence } from "../../components/CardProfileOccurrence";
import { Load } from "../../components/Load";
import { useNavigation } from "@react-navigation/core";
import { DataOccurrence } from "../../hooks/useOccurrence";



import {
  Container,
  TextLabel,
  Header,
  Photo,
  ContentInfo,
  Name,
  Email,
  Logout,
  ContentPhoto,
  IconLogout,
  FlatList,
} from './styles'
import theme from "../../global/styles/theme";


export function Profile() {
  const [ocorrence, setOcorrence] = useState<DataOccurrence[]>();
  const [lastItem, setLastItem] = useState<any>()
  const [loadingMore, setLoadingMore] = useState(true);
  const [refreshing, setRefreshing] = useState(false)
  const {
    SignOut,
    userData,
    deleteOcorrenceUser,
    getOcorrenceUser,
    getListUserUpdate
  } = useContext(AppContext);

  const navigation = useNavigation() as any

  const memorizaded = useMemo(() => ({ index, item }: any) => (
    <>
      <CardProfileOccurrence
        index={index}
        data={item}
        onClick={() => handleDetails(item)}
        deleteOcorrence={() => handleDelete(item.id)}
      />
    </>
  ), [ocorrence])

  useEffect(() => {
    listUser()
    return () => {
      new AbortController().abort()
    }
  }, [])

  async function listUser() {

    if(!userData) return

    const response = await getOcorrenceUser(userData.uid)
    setLastItem(response.lastItemList)
    setOcorrence(response.list)
  }

  function _onRefresh() {
    setRefreshing(true)
    listUser().then(data => {
      setRefreshing(false)
    })
  }

 
  
  const handleFetchMore = useCallback((distance: number)=>{
    if (distance < 1) {
      return;
    }
     setLoadingMore(true);  

     if(!userData) return

    getListUserUpdate(lastItem, userData?.uid).then(data=>{
      const newData = ocorrence?.concat(data.list as any)
      setOcorrence(newData)
      setLastItem(data.lastItemList)
    }).catch(()=>setLoadingMore(false));
  },[])

  function handleDetails(data: DataOccurrence) {
    navigation.navigate("Details", { ocorrenceData: data });
  }

  function handleDelete(id: string | any) {
    deleteOcorrenceUser(id)
    listUser()
  }

  function handleSignOut() {
    SignOut()
    navigation.goBack()
  }

  if (!ocorrence) {
    return <Load />;
  }

  return (
    <Container>
      <Header>
        <ContentPhoto>
          <Photo
            source={{ uri: userData?.photo }}
            borderRadius={50}
          />
        </ContentPhoto>
        <ContentInfo>
          <Name>{userData?.name}</Name>
          <Email>{userData?.email}</Email>
        </ContentInfo>
        <Logout onPress={handleSignOut}>
          <IconLogout name="logout" />
        </Logout>
      </Header>

      <TextLabel>Suas Ocorrências</TextLabel>
       <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />}
        data={ocorrence}
        keyExtractor={(item, value) => String(value)}
        renderItem={memorizaded}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        ListFooterComponent={
          loadingMore ? <ActivityIndicator color={theme.colors.secondary} /> : <></>
        }
      />
    </Container>
  );
}