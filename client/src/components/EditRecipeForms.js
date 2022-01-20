import React, { useState } from 'react'
import { Form } from 'react-bootstrap'


const EditRecipeForms = ({ handleFormChange, formInputProps  }) => {
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

  console.log(formInputProps.data)
  const data = formInputProps.data

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
    formInputProps.handleFormChange('title', event.target.value)
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value)
    formInputProps.handleFormChange('time', event.target.value)
  }

  const handleServingsChange = (event) => {
    setServings(event.target.value)
    formInputProps.handleFormChange('servings', event.target.value)
  }

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value)
    formInputProps.handleFormChange('keywords', event.target.value)
  }

  const handleTipsChange = (event) => {
    setTips(event.target.value)
    formInputProps.handleFormChange('tips', event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
    formInputProps.handleFormChange('description', event.target.value)
  }

  const handleMethodChange = (event) => {
    setMethod(event.target.value)
    formInputProps.handleFormChange('method', event.target.value)
  }
  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value)
    formInputProps.handleFormChange('ingredients', event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
    formInputProps.handleFormChange('author', event.target.value)
  }

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value)
    formInputProps.handleFormChange('difficulty', event.target.value)
  }

    return (
        <div className='top-forms'>
          <div className='other-forms'>
            <div className='left-forms'>
              <Form.Group className="mb-3" controlId="recipeTitle">
                <Form.Label>Recipe Title</Form.Label>
                < Form.Control type="text" placeholder="e.g. aioli" name='title' value={data.title} onChange={handleTitleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeTime">
                <Form.Label>Time to cook (in minutes) </Form.Label>
                <Form.Control type="number" placeholder="40" name='time' value={data.time} onChange={handleTimeChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeServings">
                <Form.Label>Number of servings </Form.Label>
                <Form.Control type="number" placeholder="3" name='servings' value={data.servings} onChange={handleServingsChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeKeywords">
                <Form.Label>Keywords</Form.Label>
                <Form.Control type="string" placeholder="One-pot, Indian, Quick" name='keywords' value={data.keywords} onChange={handleKeywordsChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeTips">
                <Form.Label>Top Tips</Form.Label>
                <Form.Control as="textarea" rows={1} name='tips' value={data.tips} onChange={handleTipsChange}/>
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
                <Form.Control as="textarea" rows={3} name='description' value={data.description} onChange={handleDescriptionChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeMethod">
                <Form.Label>Method</Form.Label>
                <Form.Control as="textarea" rows={3} name='method' value={data.method} onChange={handleMethodChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeIngredients">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as="textarea" rows={3} name='ingredients' value={data.ingredients} onChange={handleIngredientsChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeAuthor">
                <Form.Label>Original Author</Form.Label>
                <Form.Control type="string" placeholder="e.g. Gordon Ramsey" name='author' value={data.author} onChange={handleAuthorChange} />
              </Form.Group>
            </div>

      </div>
    
      
        </div>
    )
}
export default EditRecipeForms