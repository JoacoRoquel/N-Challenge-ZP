import React from 'react'
import { DefaultButton } from './styles'

export const Button = ({ onClick, children }) => {
  return <DefaultButton onClick={onClick}>{children}</DefaultButton>
}