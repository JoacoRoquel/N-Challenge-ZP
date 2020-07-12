import React from 'react'
import { Like } from './styles'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useLocalStorage } from '../../hooks/ManageData'

export const LikeButton = ({ id }) => {
  const LSKey = `like-${id}`
  const [liked, setLiked] = useLocalStorage(LSKey, false)

  return (
    <Like onClick={() => setLiked(!liked)} className='like-icon'>
      {liked ? <BsHeartFill className='like' color='ff0303' /> : <BsHeart className='like' />}
    </Like>
  )
}