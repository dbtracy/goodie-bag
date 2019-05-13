/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { store } from

export const DisconnectedCandies = () => {
  return (
    <ul>{
      props.candies.map(candy, idx => <li key={idx}>{candy}</li>)
    }
    </ul>
  )
}

mapStateToProps = state => ({
  candies: state.candies
})

export const Candies = connect(mapStateToProps)(DisconnectedCandies)
