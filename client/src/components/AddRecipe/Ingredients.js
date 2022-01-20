import React, { useState, Fragment } from 'react'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'

const IngredientsForm = ( handleFormChange ) => {

    const [inputFields, setInputFields] = useState([
        { ingredients: '' }
    ])

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     console.log('ingredients', inputFields)
    // }

    const handleInputChange = async (index, event) => {
        const values = [...inputFields]
        if (event.target.name === 'ingredients') {
            values[index].ingredients = event.target.value
            console.log(values)

        }
        setInputFields(values)
    }
    const handleAddFields = () => {
        const values = [...inputFields]
        values.push({ ingredients: '' })
        setInputFields(values)
      }
    
      const handleRemoveFields = index => {
        const values = [...inputFields]
        values.splice(index, 1)
        setInputFields(values)
      }

  return (
    <>
    <div className='ing-meth-form'>
      <label>Ingredients</label>
      {/* <div onSubmit={handleSubmit}> */}
          <div className="form-row">
              {inputFields.map((inputField, index) => (
                  <Fragment key={`${inputField}~${index}`}>
                      <div className='form-group col-sm-6'>
                          <input
                            type='text'
                            className='form-control'
                            id='ingred'
                            name='ingredients'
                            value={inputField.ingredients}
                            onChange={event => handleInputChange(index, event)}
                            
                            /> 
                        </div>
                        <div className="form-group col-sm-2">
                            <button
                                className="btn btn-link"
                                type="button"
                                onClick={() => handleRemoveFields(index)}
                            >
                                -
                            </button>
                            <button
                                className="btn btn-link"
                                type="button"
                                onClick={() => handleAddFields()}
                            >
                                +
                            </button>
                        </div>
                    </Fragment>
              ))}   
          </div>
          {/* <div className='submit-button'>
              <button   
                className='btn btn-primary mr-2'
                type="submit"
                onSubmit={handleSubmit}
                >
                    Save
                </button>
          </div> */}
          {/* <br/>
            <pre>
                {JSON.stringify(inputFields, null, 2)}
            </pre> */}
      </div>
      {/* </div> */}

    </>
  )
}

export default IngredientsForm