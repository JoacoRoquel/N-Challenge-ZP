import React, { useState } from 'react'
import styled from 'styled-components'
import { PostingCard } from '../components/PostingCard'
import { ModalContact } from './ModalContact'

export const ListOfPosting = ({ postings }) => {
  const [showModal, setShowModal] = useState(false)
  const [postId, setPostId] = useState('')

  const actionContact = id => {
    setPostId(id)
    setShowModal(true)
  }

  return (
    <>
      <Container>
        {postings.length === 0 ?
          <h2 className='not-found'>No se han encontrado propiedades </h2> :
          postings.map(card =>
            <PostingCard key={card.posting_id} {...card} contactClick={id => actionContact(id)} />
          )}
      </Container>
      {
        showModal &&
        <ModalContact
          showModal={showModal}
          onClose={() => { setShowModal(false); document.querySelector('body').style.overflow = 'unset' }}
          postId={postId}
        />
      }
    </>
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
