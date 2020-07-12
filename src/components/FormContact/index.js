import React from 'react'
import { FormContainer, Salir } from './styles'
import { Button } from '../Button'

export const FormContact = ({ onClose, onSubmit, errors }) => {

  return (
    <FormContainer>
      <form onSubmit={e => onSubmit(e.nativeEvent)}>
        <div className='modal-header'>
          <h4>Contactar Anunciante</h4>
        </div>
        <div className='form-control'>
          <label>Email:<span className='required'> *</span></label>
          <input name='email' type="text"></input>
          {errors.email && <p className='error-text'>{errors.email}</p>}
        </div>
        <div className='form-control'>
          <label>Nombre:</label>
          <input name='name' type="text"></input>
        </div>
        <div className='form-control'>
          <label>Telefono:</label>
          <input name='phone' type="text"></input>
          {errors.phone && <p className='error-text'>{errors.phone}</p>}
        </div>
        {errors.contact && <p className='error-text-contact'>{errors.contact}</p>}
        <div className='button-box'>
          <Button className='button-form' type='submit'>Enviar</Button>
        </div>
      </form>
      <div className='button-box'>
        <Salir className='button-form' onClick={() => onClose()}>Salir</Salir>
      </div>
    </FormContainer>

  )
}