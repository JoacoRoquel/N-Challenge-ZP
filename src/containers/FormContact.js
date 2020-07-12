import React, { useState } from 'react'
import { validateFormContact } from '../common/validates'
import { FormContact as Form } from '../components/FormContact'
import { useLocalStorage } from '../hooks/ManageData'

export const FormContact = ({ onClose, postId }) => {
  const [errors, setErrors] = useState({})
  const LSKey = `mail-sent-${postId}`
  const [mailList, setMailList] = useLocalStorage(LSKey, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    const { email, phone, name } = e.srcElement.elements

    const errorsResult = validateFormContact(email, phone, mailList)
    setErrors(errorsResult)

    if (Object.keys(errorsResult).length === 0) {
      setMailList([...mailList, email.value])
      const bodyMail = {
        email: email.value,
        phone: phone.value,
        name: name.value
      }
      console.log('Envio de Mail', bodyMail)
      onClose()
    }
  }
  return <Form
    onClose={onClose}
    onSubmit={onSubmit} errors={errors}
  />
}