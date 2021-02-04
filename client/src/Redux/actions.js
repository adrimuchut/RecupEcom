import axios from 'axios';


import {
    GET_DETAILS,
    GET_PRODUCTS,
    GET_CONDITION
} from './constants'

export function getProducts(payload, offset = 0, sort) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search?q=${payload}&limit=15&offset=${offset}&sort=${sort}`)
            .then((res) => res.data )
            .then ( data => {
                dispatch({ type: GET_PRODUCTS, payload:data})
            })
            .catch(error => alert(error))
    }
}

export function getDetails(id) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/item/${id}`)
        .then((res) => res.data)
        .then(data => {
            dispatch({type: GET_DETAILS, payload:data})
        })
        .catch(error => alert(error))
    }
}

export function getCondition(payload, offset = 0, sort,condition) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search/condition?q=${payload}&limit=15&offset=${offset}&sort=${sort}&ITEM_CONDITION=${condition}`)
            .then((res) => res.data )
            .then ( data => {
                dispatch({ type: GET_CONDITION, payload:data})
            })
            .catch(error => alert(error))
    }
}