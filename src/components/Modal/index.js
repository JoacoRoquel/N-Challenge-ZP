import React, { useEffect } from 'react';
import { ModalStyles } from './styles'

export const Modal = props => {
  const overflowValue = props.open ? 'hidden' : 'unset'
  document.querySelector('body').style.overflow = overflowValue
  useEffect(() => {
    return () => {
      document.querySelector('body').style.overflow = 'unset'
    }
  })
  return (
    <ModalStyles {...props} >
      <div className='modal'>
        {props.children}
      </div>
    </ModalStyles>
  );
};

Modal.defaultProps = {
  width: 'fit-content',
  height: 'fit-content',
}