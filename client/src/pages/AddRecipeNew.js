import axios from 'axios'
import React, { useState } from 'react'
import OtherForms from '../components/AddRecipe/OtherInputs'
import { getToken } from '../helpers/auth'
import { ImageUploadField } from '../components/AddRecipe/ImageUploadFields'
import { useNavigate } from 'react-router'

const AddRecipeNew = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: '',
    image: '',
    description: '',
    method: '',
    ingredients: '',
    keywords: '',
    time: '',
    servings: '',
    tips: '',
    difficulty: '',
    author: ''
  })

  const [isError, setIsError] = useState(false)

  const handleSubmit = async (event) => {
    console.log('button pressed')
    event.preventDefault()
    console.log('submitted data', data)

    const config = {
      method: 'post',
      url: '/api/recipes',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json'
      },
      data
    }
    console.log(data)

    try {
      const response = await axios(config)
      console.log(response.data)
      setIsError(false)
      navigate(`/recipes/${response.data._id}`)
      window.alert('Your recipe has been added to the system')
    } catch (err) {
      setIsError(true)
      window.alert(`Submitting form data: ${JSON.stringify(data, null, 2)}`)
    }
  }

  const handleFormChange = (name, value) => {
    setData({
      ...data,
      [name]: value
    })
    console.log(data)
  }

  const handleImageUrl = (url) => {
    setData({ ...data, image: url })
  }

  //const formInputProps = { data, handleFormChange }

  return (
    <section className='working-page'>
      <h3 className='form-head'>Add your recipe</h3>
      <form onSubmit={handleSubmit} className='total-form'>
        <div className='top-div'>
          <OtherForms handleFormChange={handleFormChange} />
        </div>
        <div className='bottom-div'>
          <div className='bottom-form'>
            <ImageUploadField
              value={data.image}
              name='image'
              handleImageUrl={handleImageUrl}
            />
            {isError ? (
              <div className='error'>
                <p>Error. Please try again.</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className='add-button'>
          <input type='submit' className='click' value='Add Recipe' />
        </div>
      </form>
    </section>
  )
}
export default AddRecipeNew
