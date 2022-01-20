import React, { useState } from 'react'
import { Form } from 'react-bootstrap'


const OtherForms = ({ handleFormChange }) => {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [servings, setServings] = useState('')
  const [keywords, setKeywords] = useState('')
  const [tips, setTips] = useState('')
  const [description, setDescription] = useState('')
  const [method, setMethod] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [author, setAuthor] = useState('')
  const [difficulty, setDifficulty] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
    handleFormChange('title', event.target.value)
    console.log(title)
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value)
    handleFormChange('time', event.target.value)
    console.log(time)
  }

  const handleServingsChange = (event) => {
    setServings(event.target.value)
    handleFormChange('servings', event.target.value)
    console.log(servings)
  }

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value)
    handleFormChange('keywords', event.target.value)
    console.log(keywords)
  }

  const handleTipsChange = (event) => {
    setTips(event.target.value)
    handleFormChange('tips', event.target.value)
    console.log(tips)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
    handleFormChange('description', event.target.value)
    console.log(description)
  }

  const handleMethodChange = (event) => {
    setMethod(event.target.value)
    handleFormChange('method', event.target.value)
    console.log(method)
  }
  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value)
    handleFormChange('ingredients', event.target.value)
    console.log(ingredients)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
    handleFormChange('author', event.target.value)
    console.log(author)
  }

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value)
    handleFormChange('difficulty', event.target.value)
    console.log(difficulty)
  }

    return (
        <div className='top-forms'>
          <div className='other-forms'>
            <div className='left-forms'>
              <Form.Group className="mb-3" controlId="recipeTitle">
                <Form.Label>Recipe Title</Form.Label>
                < Form.Control type="text" placeholder="e.g. aioli" name='title' value={title} onChange={handleTitleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeTime">
                <Form.Label>Time to cook (in minutes) </Form.Label>
                <Form.Control type="number" placeholder="40" name='time' value={time} onChange={handleTimeChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeServings">
                <Form.Label>Number of servings </Form.Label>
                <Form.Control type="number" placeholder="3" name='servings' value={servings} onChange={handleServingsChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeKeywords">
                <Form.Label>Keywords</Form.Label>
                <Form.Control type="string" placeholder="One-pot, Indian, Quick" name='keywords' value={keywords} onChange={handleKeywordsChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeTips">
                <Form.Label>Top Tips</Form.Label>
                <Form.Control as="textarea" rows={1} name='tips' placeholder="Any tips that can help" value={tips} onChange={handleTipsChange}/>
              </Form.Group>

              <div className='difficulty'>
            <Form.Label>Difficulty</Form.Label>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Easy"
                        name="difficulty"
                        type={type}
                        id={`inline-${type}-1`}
                        value="Easy"
                        onChange={handleDifficultyChange}
                    />
                    <Form.Check
                        inline
                        label="Medium"
                        name="difficulty"
                        type={type}
                        id={`inline-${type}-2`}
                        value="Medium"
                        onChange={handleDifficultyChange}
                    />
                    <Form.Check
                        inline
                        label="Hard"
                        name="difficulty"
                        type={type}
                        id={`inline-${type}-3`}
                        value="Hard"
                        onChange={handleDifficultyChange}
                    />
                </div>
            ))}
        </div>
            </div> 

            <div className='right-forms'>

              <Form.Group className="mb-3" controlId="recipeDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name='description' placeholder="A short summary of the recipe" value={description} onChange={handleDescriptionChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeMethod">
                <Form.Label>Method</Form.Label>
                <Form.Control as="textarea" rows={3} name='method' placeholder="Press enter to input a new step" value={method} onChange={handleMethodChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeIngredients">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as="textarea" rows={3} name='ingredients' placeholder="Press enter to input a new ingredient" value={ingredients} onChange={handleIngredientsChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeAuthor">
                <Form.Label>Original Author</Form.Label>
                <Form.Control type="string" placeholder="e.g. Gordon Ramsey" name='author' value={author} onChange={handleAuthorChange} />
              </Form.Group>
            </div>

      </div>
    
      
        </div>
    )
}
export default OtherForms