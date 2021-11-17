import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { saveRecipe } from '../helpers/api'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SaveToast from './SaveToast'

const RecipeHomeCard = ({ image, title, time, id, keywords }) => {
  const [saved, setSaved] = useState(false)
  // const likeId = likes.owner._id
  const [showToast, setShowToast] = useState(false)

  const handleClick = (event) => {
    console.log('Clicked recipe -->', id)
    event.preventDefault()
    saveRecipe(id)
    setShowToast(true)
    setSaved(true)
  }

  const keywordsStr = keywords.join(', ').toLowerCase()
  const titleStr = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()

  return (
    <>
      <div className="toast-alert">
      <SaveToast showToast={showToast} setShowToast={setShowToast}/>
      </div>
      <img src={image} alt='' />
      <h4 className='heading-four'>
        <Link to={`/recipes/${id}`}>{titleStr}</Link>
      </h4>
      <div className='flex-container'>
        <p>{keywordsStr}</p>
        <p className='para'>{`Cook: ${time} minutes`}</p>
        {!saved ? (
          <button className='second-button' onClick={handleClick}>
            +
          </button>
        ) : (
          <>
            <Link to='/account'>
              <FontAwesomeIcon icon={faCheckCircle} className='tick-icon' />
            </Link>
          </>
        )}
      </div>
    </>
  )
}

export default RecipeHomeCard
