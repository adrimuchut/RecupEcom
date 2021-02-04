
import {
    GET_PRODUCTS,
    GET_DETAILS,
    GET_CONDITION
} from './constants'


const initialState = {
    currentproduct: "",
    products: [],
    currentoffset: "0",
    currentsort: '',
    condition: '',
    details:[],
    pictures:[],
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                currentproduct: action.payload.query,
                products: action.payload.results,
                currentoffset: action.payload.paging.offset,
                currentsort: action.payload.sort.id
            }
        }
        case  GET_DETAILS: {
            return {
                ...state,
                details: action.payload,
                photos: action.payload.pictures[0].url,
                photos2:action.payload.pictures[1].url,
                photos3:action.payload.pictures[2].url,

            }
        }
        case GET_CONDITION: {
            return {
                ...state,
                currentproduct: action.payload.query,
                products: action.payload.results,
                currentoffset: action.payload.paging.offset,
                currentsort: action.payload.sort.id,
                condition: action.payload.filters
            }
        }

        default:
            return state
    }
}
export default Reducer;