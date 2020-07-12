const emailValidation = val => val.match(/\w@\w*\.\w/)
const hasValue = val => !!val

export const validateFormContact = (email, phone, mailList) => {
  let errors = {}

  // Email errors
  if (!hasValue(email.value)) {
    errors.email = 'Email es un campo requerido'
  } else if (hasValue(email.value) && !emailValidation(email.value)) {
    errors.email = 'Email contiene un formato incorrecto'
  }
  if (phone.value.trim() !== '' && phone.value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g) === null) {
    errors.phone = 'Teléfono no contiene formato correcto'
  }
  if (mailList.includes(email.value)) {
    errors.contact = 'Ya se envio un mail a este anunciante'
  }
  return errors
}