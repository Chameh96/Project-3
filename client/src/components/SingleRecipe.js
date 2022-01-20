import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Comments from './Comments.js'
import AddComment from './AddComment.js'
import { FaStar } from 'react-icons/fa'
import { getToken } from '../helpers/auth.js'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SingleRecipe = ({
  isLoggedIn,
  setRecipe,
  title,
  image,
  description,
  method,
  ingredients,
  keywords,
  time,
  servings,
  tips,
  difficulty,
  author,
  comments,
  averageRating
}) => {
  const [starRating, setStarRating] = useState(null)
  const [hover, setHover] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const deleteRecipe = async (id) => {
    const config = {
      method: 'delete',
      url: `/api/recipes/${id}`,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
    const response = await axios(config)
    return response.data
  }

  const handleDeleteClick = () => {
    deleteRecipe(id)
      .then((data) => {
        navigate('/recipes')
        console.log(data)
      })
      .catch((err) => {
        console.error(err)
        alert(err)
      })
  }

  const splitKeywords = keywords.slice(' ').join(', ')
  console.log(splitKeywords)
  return (
    <>
      <div className='top-half'>
        <div className='image-div'>
          <img src={image} alt='' />
        </div>
        <div className='info-div'>
          <div className='info-contain'>
            <h2 className='singleRecipe-header'>{title}</h2>
            <div className='average-rating'>
              <FaStar className='star' />
              <p>{`${averageRating}`}</p>
            </div>
            <div className='info-wrapper'>
              <div className='first-div'>
                <p className='one'>{`Cook: ${time} minutes`}</p>
                <p className='one'>{`Serves: ${servings}`}</p>
              </div>
              <div className='second-div'>
                <p className='two'>{`Difficulty: ${difficulty}`}</p>
                <p className='two'>{` Author: ${author}`}</p>
              </div>
            </div>
            <div className='keywords'>
              <p>{splitKeywords}</p>
            </div>
            <div className='description-div'>
              <p>{description}</p>
            </div>
            {isLoggedIn ? (
              <div className='add-delete-buttons'>
                <button className='delete-button' onClick={handleDeleteClick}>
                  Delete Recipe
                </button>
                <Link to={`/recipes/${id}/edit`}>
                  <button className='update-button'>Update Recipe</button>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className='meth-ing'>
        <div className='line-break' id='ingredients'>
          <h3> Ingredients </h3>
          {ingredients.map((str) => {
            return `
              ${str}
            `
          })}
        </div>
        <div className='line-break' id='method'>
          <h3> Method </h3>
          {method.map((str) => {
            return `
              ${str}
            `
          })}
        </div>
      </div>
      <p className='tips-para'>{`Author's tip: "${tips}"`}</p>
      <div className='comments-container'>
        <AddComment
          setRecipe={setRecipe}
          starRating={starRating}
          setStarRating={setStarRating}
          hover={hover}
          setHover={setHover}
        />
        <Comments comments={comments} averageRating={averageRating} />
      </div>
    </>
  )
}

export default SingleRecipe
