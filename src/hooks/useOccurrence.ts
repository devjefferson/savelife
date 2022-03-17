import { useEffect } from "react"
import { doc, setDoc, Timestamp, collection, getDocs, query, orderBy, limit, startAfter, where, deleteDoc } from "firebase/firestore";
import { app, db } from "../Services";

export interface FormatData {
  nanoseconds: number,
  seconds: number,
}

export interface DataLocation {
  city: null | null,
  country: string | null,
  district: string | null,
  isoCountryCode: string | null,
  latitude: number | null,
  longitude: number | null,
  name: string | null,
  postalCode: string | null,
  region: string | null,
  street: string | null,
  streetNumber: string | null,
  subregion: string | null,
  timezone: string | null,
}
export interface DataUserDate {
  uid: string
  email: string
  name: string
  photo?: string
}
export interface DataOccurrence extends DataLocation {
  id: string
  category: string | null
  occurrenceDateAt: FormatData
  createdAt: FormatData
  death: boolean | null
  details: string | null
  userData: DataUserDate
  tag: string[]
}

export interface DataOccurrenceReturn {
  list: DataOccurrence[]
  lastItemList?: any,
}


export default function usePermissions() {

  async function setOcurrence(data: DataOccurrence): Promise<void> {
    const datas = await setDoc(doc(collection(db, "occurrence")), data)

    console.log(datas)

  }

  async function getOccurrence(): Promise<DataOccurrenceReturn> {
    const post = await getDocs(query(collection(db, "occurrence"), orderBy('createdAt', 'desc')))
    const collections = post.docs.map(posts => {
      return Object.assign({}, { id: posts.id }, posts.data())
    })
    return {
      list: collections as DataOccurrence[],
      lastItemList: post.docs[post.docs.length - 1]
    }

  }

  async function getListOccurrence(): Promise<DataOccurrenceReturn> {
    const post = await getDocs(query(collection(db, "occurrence"), orderBy('createdAt', 'desc'),limit(10)))
    const collections = post.docs.map(posts=>{
      return Object.assign({}, {id: posts.id}, posts.data()) 
    })
    return {
      list: collections as DataOccurrence[],
      lastItemList: post.docs[post.docs.length - 1]
    } 
  }

  async function getListUpdate(lastItem: any): Promise<DataOccurrenceReturn>{
    const post = await getDocs(query(
      collection(db, "occurrence"), 
      orderBy('createdAt', 'desc'), 
      startAfter(lastItem) , 
      limit(10)
      )
    )
    const collections = post.docs.map(posts=>{
      return Object.assign({}, {id: posts.id}, posts.data()) 
    })
    return {
      list: collections as DataOccurrence[],
      lastItemList: post.docs[post.docs.length - 1]
    } 
  }

  async function getListSearchUpdate(lastItem: any, params: string): Promise<DataOccurrenceReturn> {
    const post = await getDocs(query(collection(db, "occurrence"), where('tag', 'array-contains', params), startAfter(lastItem),limit(10), orderBy('createdAt', 'desc')))
    const collections = post.docs.map(posts=>{
      return Object.assign({}, {id: posts.id}, posts.data()) 
    })
    return {
      list: collections as DataOccurrence[],
      lastItemList: post.docs[post.docs.length - 1]
    } 
  }
 
  async function getListSearch( params: string): Promise<DataOccurrenceReturn> {
    const q = query(collection(db, "occurrence"), where("tag", "array-contains", params),limit(10), orderBy('createdAt', 'desc'))
    const post = await getDocs(q)
    console.log(post.size)

    const collections = post.docs.map((doc) => {
      return Object.assign({}, { id: doc.id }, doc.data())
    })

    return {
      list: collections as DataOccurrence[],
      lastItemList: post.docs[post.docs.length - 1]
    } 
    
  }

  async function getOcorrenceUser(uuid: string): Promise<DataOccurrenceReturn> {
    const post = await getDocs(query(collection(db, "occurrence"), where('userData.uid', '==', uuid), orderBy('createdAt', 'desc'),limit(10)))
    const collections = post.docs.map(posts=>{
      return Object.assign({}, {id: posts.id}, posts.data()) 
    })
    return {
      list: collections as DataOccurrence[],
      lastItemList: post.docs[post.docs.length - 1]
    } 
  }

  async function getListUserUpdate(lastItem: any, uuid: string){
    const post = await getDocs(query(collection(db, "occurrence"), where('userData.uid', '==', uuid), startAfter(lastItem),orderBy('createdAt', 'desc'),limit(10)))
    const collections = post.docs.map(posts=>{
      return Object.assign({}, {id: posts.id}, posts.data()) 
    })
    return {
      list: collections as DataOccurrence[],
      lastItemList: post.docs[post.docs.length - 1]
    } 
  }

  async function deleteOcorrenceUser(id: string){
    await deleteDoc(doc(db, "occurrence", id));
  }

  return {
    setOcurrence,
    getOccurrence,
    getListOccurrence,
    getListUpdate,
    getOcorrenceUser,
    getListUserUpdate,
    deleteOcorrenceUser,
    getListSearchUpdate,
    getListSearch
  }
}