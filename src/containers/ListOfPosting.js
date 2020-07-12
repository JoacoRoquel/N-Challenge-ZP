import React from 'react'
import styled from 'styled-components'
import { PostingCard } from '../components/PostingCard'

export const ListOfPosting = ({ postings }) => {

  const actionContact = id => {
    console.log('Modal')
  }

  return (
    <Container>
      {postings.length === 0 ?
        <h2 className='not-found'>No se han encontrado propiedades </h2> :
        postings.map(card =>
          <PostingCard key={card.posting_id} {...card} contactClick={id => actionContact(id)} />
        )}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: inline-block;
  box-sizing: border-box;

  .not-found{
    text-align:center;
    margin-top:15%;
  }
  `
