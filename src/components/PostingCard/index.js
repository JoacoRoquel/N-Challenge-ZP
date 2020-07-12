import React from 'react'
import { priceFormat, addressFormat, getDiffDays, publicationFormat } from '../../common/utilities'
import { Button } from '../Button'
import { LikeButton } from '../LikeButton'
import { Link } from 'react-router-dom'
import { StyledPostingCard, CardContainer, FirstColumn, SecondColumn } from './styles'
import { MdRestore } from 'react-icons/md'

export const PostingCard = props => {
  const {
    posting_id,
    title,
    posting_location,
    posting_prices,
    posting_picture,
    posting_slug,
    posting_description,
    publication_plan,
    publish_date,
    posting_status } = props

  //Precio y Expensas
  const price = priceFormat(posting_prices[0].price.amount, posting_prices[0].price.currency)
  const expenses = !!posting_prices[0].expenses &&
    priceFormat(posting_prices[0].expenses.amount, posting_prices[0].expenses.currency)

  //Formateo de Direccion
  const address = addressFormat(posting_location.address,
    posting_location.zone,
    posting_location.city)

  //Calcular Diferencia de dias
  const diffDays = getDiffDays(publish_date)
  //Tipo de publicacion
  const publicType = publicationFormat(publication_plan)
  const url = `/post/${posting_slug}`

  return (
    <StyledPostingCard publicType={publicType}>
      <CardContainer>
        <FirstColumn publicType={publicType}>
          <div className='container-image'>
            <div>
              <img className='picture' alt='imagen de propiedad' src={posting_picture} />
            </div>
            <div><LikeButton id={posting_id} /></div>
            <span className='public-type'>{publicType}</span>
          </div>
          <div className='container-price'>
            <div className='itemPrice'>
              <div><span className='price'><b>{price}</b></span></div>
              {expenses && <span className='expenses'> + {expenses} Expensas</span>}
            </div>
          </div>
        </FirstColumn>
        <SecondColumn>
          <div className='info'>
            <div className='header'>
              <Link to={url}>
                <h3 className='title'>{title}</h3>
              </Link>
              <span className='address'>{address}</span>
            </div>
            <Link to={url}>
              <div className='description'>{posting_description}</div>
            </Link>
          </div>
          <div className='contact-info'>
            <span className='diff-days'> <MdRestore size={15} /> Publicado hace {diffDays} días</span>
            {posting_status.status === 'RESERVED' && <span className='reserved'>{posting_status.label}</span>}
            <Button onClick={() => props.contactClick(props.posting_id)}>Contactar</Button>
          </div>
        </SecondColumn>
      </CardContainer>
    </StyledPostingCard>
  )

}
