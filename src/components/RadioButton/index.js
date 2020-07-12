import React from 'react'

export const RadioButton = ({ handlerChange, labelValue, checked }) => {
  return (
    <div>
      <input type="radio" checked={checked} value={labelValue} onChange={() => handlerChange()} />
      <label>{labelValue}</label>
    </div>
  )
}