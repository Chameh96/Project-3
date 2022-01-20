import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { unsaveRecipe } from '../helpers/api'

const SavedRecipeCard = ({
  image,
  title,
  time,
  id,
  keywords,
  userId,
  likes
}) => {
  const [saved, setSaved] = useState(true)
  // const likeId = likes.owner._id

  const handleClick = (event) => {
    event.preventDefault()
    console.log('Unsaved recipe --> ', id)
    const likeToDelete = likes.filter((like) => like.owner === userId)
    console.log('like to delete -->', likeToDelete)
    const likeId = likeToDelete[0]._id
    console.log('likeId -->', likeId)
    unsaveRecipe(id, likeId)
    setSaved(false)
  }

  const keywordsStr = keywords.join(', ').toLowerCase()
  const titleStr = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()

  console.log(likes, userId)

  return (
    <>
      <img src={image} alt='' />
      <h4 className='heading-four'>
        <Link to={`/recipes/${id}`}>{titleStr}</Link>
      </h4>
      <div className='flex-container'>
        <p>{keywordsStr}</p>
        <p className='para'>{`Cook: ${time} minutes`}</p>
        {saved && (
          <FontAwesomeIcon
            icon={faTrashAlt}
            className='trash-icon'
            onClick={handleClick}
          />
        )}
      </div>
    </>
  )
}

export default SavedRecipeCard
