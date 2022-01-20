import React, { useDebugValue } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getToken } from '../helpers/auth'
import EditRecipeForms from '../components/EditRecipeForms'
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

    useEffect(() => {
        fetchRecipe(id).then(setData)
    }, [id])

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Chicken')

        const config = {
            method: 'put',
            url: `/api/recipes/${id}`,
            headers: {
              Authorization: `Bearer ${getToken()}`,
              'Content-Type': 'application/json'
            },
            data
          }
          console.log(data)

        try {
            const response = await axios(config)
            console.log('Try Data',response.data)
            navigate(`/recipes/${id}`)
            
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
        <section className='working-page'>
            <h3 className='form-head'>Edit This Recipe</h3>
            <form onSubmit={handleSubmit} className='total-form'>
                <div className='top-div'>
                    <EditRecipeForms formInputProps={formInputProps}/>
                    
                </div>
                <div className='bottom-div'>
                    <div className="bottom-form">
                        <ImageUploadField name='image' handleImageUrl={handleImageUrl}/>
                    </div>
                </div>
                <div className='add-button'>
                <div>
                    <input type='submit' className ='click' value='Save Updates'/>
                </div>
                <div>
                    <input type='button' onClick={goBack} className ='click' value='Cancel'/>
                </div>
                </div>
            </form>
        </section>
        </>
    )
}

export default UpdateRecipe