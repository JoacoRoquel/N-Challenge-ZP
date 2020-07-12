import React from 'react'
import { Modal } from '../components/Modal'
import { FormContact } from './FormContact'

export const ModalContact = ({ showModal, onClose, postId }) => {

  return (<>
    <Modal open={showModal} onClose={onClose}>
      <FormContact onClose={onClose} postId={postId} />
    </Modal>
  </>)

}