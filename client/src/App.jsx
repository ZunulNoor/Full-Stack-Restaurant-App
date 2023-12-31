import React, { useContext, useState } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/context'
import { decodeToken } from 'react-jwt'
import './App.css'


export const AppRoute = '/'


const ComponentbyRole = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentbyRole[params] || ComponentbyRole['guest']

export default function App() {

  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res?.role
    }
  }
  const currentToken = decodeUser(state.token)
  const CurrentUser = getUserRole(currentToken)

  return (

    <CurrentUser />
  )
}
