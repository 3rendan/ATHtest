import React, { createContext, useReducer, useEffect } from "react"
import itemsReducer from "./ItemsReducer"
import axios from 'axios'
const ItemsContext = createContext()

export const ItemsProvider =({children}) => {
    const intialState = {
        item: [],
        items: [],
        loading: true
    }
    const [ state, dispatch] = useReducer(itemsReducer, intialState)
    const archive = axios.create({
        baseURL: `https://digital.provath.org/api/`
    })

    useEffect(() => {
        getItem()
        getItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
    const getItems = async () => {
        const res = await archive.get(`items`);
        dispatch({
            type: 'GET_ITEMS',
            payload: res.data,
        })

    } 
    const getItem = async () => {
        console.log(id)
        const res = await archive.get(`items`)
        const items = res.data
        dispatch({
            type: 'GET_ITEM',
            payload: items.find(item => item.id === intId),
        })

    } 

    return <ItemsContext.Provider value={{
        items: state.items,
        loading: state.loading,
        item: state.item,
        getItems

    }}>
        { children }
    </ItemsContext.Provider>
}
export default ItemsContext