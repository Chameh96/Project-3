import React, { useDebugValue } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getToken } from '../helpers/auth'
import OtherForms from '../components/AddRecipe/OtherInputs'
import { fetchRecipe } from '../helpers/api'
import { ImageUploadField } from '../components/AddRecipe/ImageUploadFields'

const UpdateRecipe = () => {
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
    const { id } = useParams()
    const navigate = useNavigate()

    console.log(id)

    // const fetchRecipe = async (_id) => {
    //     const config = {
    //       method: 'get',
    //       url: `/api/recipes/${_id}`,
    //       headers: {}
    //     }
      
    //     const response = await axios(config)
    //     return response.data
    // }

    useEffect(() => {
        fetchRecipe(id).then(setData)
    }, [id])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const config = {
            method: 'put',
            url: `/api/recipes/${id}/edit`,
            headers: {
              Authorization: `Bearer ${getToken()}`,
              'Content-Type': 'application/json'
            },
            data
          }
          console.log(data)

        try {
            const response = await axios(config)
            navigate(`/recipes/${id}`)
            console.log('Try Data',response.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleFormChange = (name, value) => {
        setData({
          ...data,
          [name]: value
        })
        console.log(data)
    }

    const handleImageUrl = url => {
        setData({ ...data, image: url })
    }


    const goBack = () => {
        navigate('/recipes')
    }

    const formInputProps = { data: data, handleFormChange }

    return (
        <>
        <section>
            <h3>Edit This Recipe</h3>
            <div className='top-div'>
                <OtherForms formInputProps={formInputProps}/>
                <ImageUploadField value={data.image} name='image' handleImageUrl={handleImageUrl}/>
              </div>
              <div className='bottom-div'>
                <div className="bottom-form">
                  
                </div>
              </div>
            <div>
                <input type='submit' handleSubmit={handleSubmit} value='Save Updates'/>
            </div>
            <div>
                <input type='button' onClick={goBack} value='Cancel'/>
            </div>
        </section>
        </>
    )
}

export default UpdateRecipe