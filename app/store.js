/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

const initialState = ({
  candies: []
})

/********CANDIES ACTION CREATOR AND SUB-REDUCER********/

const GET_CANDIES = 'GET_CANDIES';

export const getCandiesActionCreator = candies => ({
  type: GET_CANDIES,
  candies
})

const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { candies: action.candies }
    default:
      return state
  }
}







export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  ))
)
