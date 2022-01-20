import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeHomeCard from '../components/RecipeHomeCard.js'
import Carousel from 'react-bootstrap/Carousel'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [randomRecipes, setRandomRecipes] = useState([])

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const { data } = await axios.get('/api/recipes')
        console.log(data)
        setRecipes(data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getAllRecipes()
  }, [])

  const filteredRecipes = recipes.slice(10, 16)

  useEffect(() => {
    if (!isLoading) {
      let r = []
      for (let i = 0; i < 3; i++) {
        const rn = Math.floor(Math.random() * recipes.length)
        const random = { ...recipes[rn] }
        console.log('eq', random === recipes[rn])
        random.title =
          random.title.charAt(0).toUpperCase() +
          random.title.slice(1).toLowerCase()
        random.title = random.title.split(' ')
        console.log('rt', random.title)
        r = [...r, random]
      }
      setRandomRecipes(r)
    }
  }, [isLoading])

  useEffect(() => {
    console.log('RR', randomRecipes)
  }, [randomRecipes])

  return (
    <>
      {!isLoading ? (
        randomRecipes.length && (
          <>
            <Carousel className='carousel'>
              <Carousel.Item className='item'>
                <div className='container'>
                  <div className='img'>
                    <img
                      className='first-image'
                      src={randomRecipes[0].image}
                      alt='First slide'
                    />
                  </div>
                  <div className='caption'>
                    <div className='caption-text'>
                      <h1>
                        <Link to={`/recipes/${randomRecipes[0]._id}`}>
                          {randomRecipes[0].title.slice(0, -2).join(' ')}
                          <span>
                            {' '}
                            {randomRecipes[0].title.slice(-2).join(' ')}
                          </span>
                        </Link>
                      </h1>
                      <p>{randomRecipes[0].description}</p>
                    </div>
                    <div className='link'>
                      <Link to={`/recipes/${randomRecipes[0]._id}`}>
                        View recipe
                      </Link>
                      <button className='button'>+</button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <div className='container'>
                  <div className='img'>
                    <img
                      className='first-image'
                      src={randomRecipes[1].image}
                      alt='Second slide'
                    />
                  </div>
                  <div className='caption'>
                    <div className='caption-text'>
                      <h1>
                        <Link to={`/recipes/${randomRecipes[1]._id}`}>
                          {randomRecipes[1].title.slice(0, -2).join(' ')}
                          <span>
                            {' '}
                            {randomRecipes[1].title.slice(-2).join(' ')}
                          </span>
                        </Link>
                      </h1>
                      <p>{randomRecipes[1].description}</p>
                    </div>
                    <div className='link'>
                      <Link to={`/recipes/${randomRecipes[1]._id}`}>
                        View recipe
                      </Link>
                      <button className='button'>+</button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <div className='container'>
                  <div className='img'>
                    <img
                      className='first-image'
                      src={randomRecipes[2].image}
                      alt='Third slide'
                    />
                  </div>
                  <div className='caption'>
                    <div className='caption-text'>
                      <h1>
                        <Link to={`/recipes/${randomRecipes[0]._id}`}>
                          {randomRecipes[2].title.slice(0, -2).join(' ')}
                          <span>
                            {' '}
                            {randomRecipes[2].title.slice(-2).join(' ')}
                          </span>
                        </Link>
                      </h1>
                      <p>{randomRecipes[2].description}</p>
                    </div>
                    <div className='link'>
                      <Link to={`/recipes/${randomRecipes[2]._id}`}>
                        View recipe
                      </Link>
                      <button className='button'>+</button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
            <div className='top-recipes'>
              <h2 className='heading-popular'>Popular Recipes</h2>
              <div className='recipeList'>
                {filteredRecipes.map((recipe) => (
                  <div className='oneRecipe' key={recipe._id}>
                    <RecipeHomeCard {...recipe} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      ) : (
        <>
          <div className='loading-container'>
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        </>
      )}
    </>
  )
}

export default Home
