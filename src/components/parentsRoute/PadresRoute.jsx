import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthRoute = ({component}) => {
  const {parent, token} = useSelector(state => state.auth)
  if(parent === null) return(<Navigate to="/login"/>);
  if(parent) return component
}

export default AuthRoute