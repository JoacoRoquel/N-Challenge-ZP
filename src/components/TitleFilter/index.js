import React from 'react'
import { Title } from './styles'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

export const TitleFilter = ({ handlerClick, title, show }) => {
  return (
    <Title className='colapsable' onClick={() => handlerClick()}>
      <h3>{title}</h3>
      {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
    </Title>)
}