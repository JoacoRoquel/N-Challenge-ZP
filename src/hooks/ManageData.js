import { useState, useEffect } from 'react'
import { postings } from '../mockedData'

export const GetData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  //Asigno valor de mayor a menor en tipo de publicacion
  const getPublicationNumber = value => {
    return (value === 'SIMPLE' ? 1 :
      value === 'HIGHLIGHTED' ? 2 : 3)
  }

  useEffect(() => {
    setLoading(true)
    //Simulando Fetch con 1,5 segundos
    setTimeout(() => {
      setData(postings.sort((a, b) => getPublicationNumber(a.publication_plan) < getPublicationNumber(b.publication_plan) ? 1 : -1))
      setLoading(false)
    }, 1500);
  }, [])

  //retorno la data mockeada y loading de pagina
  return { data, loading }
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return !!item ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.log(e)
    }
  }
  return [value, setLocalStorage]
}