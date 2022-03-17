import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, VirtualizedList } from 'react-native';
import { ButtonSearch } from '../../components/ButtonSearch';
import { CardOcorrencePrimary } from '../../components/CardOcorrencePrimary';
import { InputSearch } from '../../components/InputSearch';
import { Load } from '../../components/Load';
import theme from '../../global/styles/theme';
import { DataOccurrence } from '../../hooks/useOccurrence';
import AppContext from '../../Provider';

import {
  Container,
  Header,
  Title,
  ContentInputSearch
} from './styles'


export function ListOccurrence() {
  const [searchLocation, setSearchLocation] = useState<string | any>()
  const [postList, setPostList] = useState<DataOccurrence[]>([])
  const [lastItem, setLastItem] = useState<any>()
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false)
  var [pagination, setPagination] = useState<number>(1)


  const navigation = useNavigation() as any

  const {
    getListOccurrence,
    getListUpdate,
    getListSearch,
    getListSearchUpdate

  } = useContext(AppContext);

useEffect(()=>{
  setList()
  return ()=> new AbortController().abort()
},[])


  function setList() {
    //setPostList([])
    getListOccurrence().then(data => {
      setPostList(data.list as any)
      setLastItem(data.lastItemList)

    })
  }

  function _onRefresh() {
    setList()
  }

  async function handleSearchLocation() {
    setPagination(1)

    if (!searchLocation) {
      setList()
      return
    }
    const { list, lastItemList } = await getListSearch(searchLocation.toLocaleLowerCase())
    setPostList(list)
    setLastItem(lastItemList)
    if (list.length <= 5) {
      setLoadingMore(false)
    }
  }
  async function handleDetails(data: DataOccurrence) {
    navigation.navigate("Details", { ocorrenceData: data });


  }


  const handleFetchMore = useCallback((distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);

    if (!searchLocation) {
      getListUpdate(lastItem).then(data => {
        const newData = postList?.concat(data.list as any)
        setPostList(newData)
        setLastItem(data.lastItemList)
        setLoadingMore(false)
      }).catch(() => setLoadingMore(false));
    }
    else {
      getListSearchUpdate(lastItem, searchLocation.toLocaleLowerCase()).then(data => {
        const newData = postList?.concat(data.list as any)
        setPostList(newData)
        setLastItem(data.lastItemList)
        setLoadingMore(false)
      }).catch(() => setLoadingMore(false));
    }
  }, [])

  const memorizaded = useMemo(() => ({ index, item }: any) => (
    <>
      <CardOcorrencePrimary
        index={index}
        data={item as any}
        onPress={() => handleDetails(item)} />
    </>
  ), [postList])

  if (!postList) {
    return (
      <Load />
    )
  }
  return (
    <Container>
      <Header>
        <Title>
          Buscar
        </Title>
        <ContentInputSearch>
          <InputSearch
            onChangeText={setSearchLocation}
            placeholder="Bairro"
          />
          <ButtonSearch
            onPress={handleSearchLocation}
          />
        </ContentInputSearch>

      </Header>

      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />}
        data={postList as []}
        style={{ paddingHorizontal: 20, marginBottom: 35, flex: 1 }}
        keyExtractor={(item, value) => String(value)}
        renderItem={memorizaded}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        ListFooterComponent={
          loadingMore ? (

            <ActivityIndicator color={theme.colors.secondary} size="large" />

          ) : <></>
        }
      />
    </Container>
  )
}