import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(null)
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='searchBar-container'>
      <form action='/' method='get' autoComplete='off'>
        <input
          type='text'
          id='header-search'
          placeholder='search recipes'
          name='query'
          onChange={handleChange}
        />
        <Link
          to={{ pathname: '/search-results', search: `?query=${searchValue}` }}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className='arrow-icon-nav'
            type='submit'
          />
        </Link>
      </form>
    </div>
  )
}

export default SearchBar
