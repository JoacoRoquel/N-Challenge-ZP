import React, { useState} from 'react'
import { Filter } from '../../components/Filter'
import { PageContainer, Main, FirstColumn } from './styles'


export const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const [operationType, setOperationType] = useState('All')

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
      </PageContainer>
    </Main>
  )
}




