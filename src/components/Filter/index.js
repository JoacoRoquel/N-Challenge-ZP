import React, { useState, useRef } from 'react'
import { RadioButton } from '../RadioButton'
import { TitleFilter } from '../TitleFilter'
import { FilterContainer, AddressContainer } from './styles'
import { FaSearchLocation } from 'react-icons/fa'

export const Filter = ({ onChangeAddress, onChangeOperation, operationType }) => {
  const [showOperation, setShowOperation] = useState(true)
  const [showAddress, setShowAddress] = useState(true)
  const ref = useRef(null)

  return (
    <FilterContainer>
      <h3>Filtrado Actual</h3>
      <hr />
      <div className='search'>
        <TitleFilter
          handlerClick={() => setShowAddress(!showAddress)}
          show={showAddress}
          title='Dirección:'
        />
        {showAddress &&
          <AddressContainer>
            <input type='text'
              ref={ref}
              placeholder='Buscar por dirección' />
            <button
              className='search-button'
              onClick={() => onChangeAddress(ref.current.value)}>
              <FaSearchLocation size='14' />
            </button>
          </AddressContainer>
        }
      </div>
      <hr />
      <div>
        <div className='operation-list'>
          <TitleFilter
            handlerClick={() => setShowOperation(!showOperation)}
            show={showAddress}
            title='Tipo de Operación:'
          />
          {showOperation &&
            <>
              <RadioButton handlerChange={() => onChangeOperation('Venta')} labelValue='Comprar' checked={operationType === 'Venta'} />
              <RadioButton handlerChange={() => onChangeOperation('Alquiler')} labelValue='Alquilar' checked={operationType === 'Alquiler'} />
              <RadioButton handlerChange={() => onChangeOperation('Temporal')} labelValue='Temporal' checked={operationType === 'Temporal'} />
              <RadioButton handlerChange={() => onChangeOperation('All')} labelValue='Todos' checked={operationType === 'All'} />
            </>
          }
        </div>
      </div>
    </FilterContainer >
  )

}