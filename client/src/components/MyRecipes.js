import React from 'react'
import RecipeHomeCard from './RecipeHomeCard'
import { Link } from 'react-router-dom'

const MyRecipes = (recipes) => {
  console.log(recipes)

  return (
    <>
      <h2 className='account-header'>Your added recipes</h2>
      <div className='recipeList'>
        {recipes ? (
          recipes.map((recipe) => (
            <div key={recipe._id} className='oneRecipe'>
              <RecipeHomeCard {...recipe} />
            </div>
          ))
        ) : (
          <>
            <div className='myRecipes-container'>
              <h3>You haven&apos;t created any recipes yet.</h3>
              <Link to='/recipes/new'>
                <p>Add one here.</p>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )

  // if (recipes.length) {
  //   return (
  //     <>
  //       <h2 className='account-header'>Your added recipes</h2>
  //       <div className='recipeList'>
  //         {recipes.map((recipe) => (
  //           <div key={recipe._id} className='oneRecipe'>
  //             <RecipeHomeCard {...recipe} />
  //           </div>
  //         ))}
  //       </div>
  //     </>
  //   )
  // } else {
  //   return (
  //     <>
  //       <h2 className='account-header'>Your added recipes</h2>
  //       <div className='myRecipes-container'>
  //         <h3>You haven&apos;t created any recipes yet.</h3>
  //         <Link to='/recipes/new'>
  //           <p>Add one here.</p>
  //         </Link>
  //       </div>
  //     </>
  //   )
  // }
}

export default MyRecipes
