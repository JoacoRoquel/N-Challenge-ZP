import React, { useState, useMemo } from 'react'
import { Filter } from '../../components/Filter'
import { Loading } from '../../components/Loading'
import { GetData } from '../../hooks/ManageData'
import { PageContainer, Main, FirstColumn } from './styles'

export const Home = () => {
  const { data, loading } = GetData()
  const [searchValue, setSearchValue] = useState('')
  const [operationType, setOperationType] = useState('All')
  const [filteredPosting, setFilteredPosting] = useState(data)

  useMemo(() => {
    //Filtro por Address si es necesario
    const resultAddress = !!searchValue ? data.filter(posting => {
      return `${posting.posting_location.address}`
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    }) : data
    //Filtro por tipo de operacion
    const result = operationType === 'All' ? resultAddress : resultAddress.filter(posting => {
      return `${posting.operation_type.operation_type_name}`
        .toLocaleLowerCase()
        .includes(operationType.toLocaleLowerCase())
    })
    setFilteredPosting(result)
  }, [data, searchValue, operationType])

  //console.log(filteredPosting)
  return (
    <Main>
      <PageContainer>
        <FirstColumn>
          <Filter
            onChangeAddress={setSearchValue}
            onChangeOperation={setOperationType}
            operationType={operationType}
          />
        </FirstColumn>
        {loading ? <Loading /> : <h1>Propiedades</h1>}
      </PageContainer>
    </Main>
  )
}