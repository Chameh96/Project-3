import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../helpers/api'
import RecipeHomeCard from '../components/RecipeHomeCard'
import { Link } from 'react-router-dom'

const SearchResults = () => {
  const [recipes, setRecipes] = useState([])
  const { search } = window.location
  const query = new URLSearchParams(search).get('query')
  const filteredRecipes = filterRecipes(recipes, query)

  useEffect(() => {
    fetchRecipes().then(setRecipes)
  }, [])

  function filterRecipes(recipes, query) {
    if (!query) {
      return recipes
    }
    return recipes.filter((recipe) => {
      const recipeTitle = recipe.title.toLowerCase()
      const recipeKeywords = recipe.keywords.join(' ').toLowerCase()
      return recipeTitle.includes(query) || recipeKeywords.includes(query)
    })
  }

  return (
    <>
      {recipes.length && (
        <>
          <h2 className='account-header'>
            Search results for &quot;{query}&quot;
          </h2>
          <div className='recipeList'>
            {filteredRecipes.length ? (
              filteredRecipes.map((recipe) => (
                <div key={recipe._id} className='oneRecipe'>
                  <RecipeHomeCard {...recipe} />
                </div>
              ))
            ) : (
              <div className='no-results'>
                <h3>Sorry, none of our recipes matched your search.</h3>
                <p>
                  <Link to='/recipes'>Browse all recipes here.</Link>{' '}
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default SearchResults
