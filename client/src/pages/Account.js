import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AccountDetails from '../components/AccountDetails'
import SavedRecipes from '../components/SavedRecipes'

import { fetchUser } from '../helpers/api.js'

const Account = ({ setIsLoggedIn }) => {
  const [accountDetails, setAccountDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const loaded = () => setIsLoading(false)

  useEffect(() => {
    fetchUser().then(setAccountDetails).then(loaded)
  }, [])

  console.log(accountDetails)

  if (isLoading) {
    return (
      <>
        <div className='loading-container'>
          <Spinner variant='warning' animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      </>
    )
  } else if (!isLoading) {
    return (
      <div className='account-container'>
        <Tabs
          defaultActiveKey='account'
          id='uncontrolled-tab-example'
          className='mb-3'
        >
          <Tab eventKey='account' title='Account'>
            <AccountDetails
              username={accountDetails.username}
              email={accountDetails.email}
              userId={accountDetails._id}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Tab>
          <Tab eventKey='savedRecipes' title='Saved recipes'>
            <SavedRecipes
              userId={accountDetails._id}
              recipes={accountDetails.likedRecipes}
            />
          </Tab>
          <Tab eventKey='myRecipes' title='My recipes'>
            {/* <MyRecipes
              userId={accountDetails._id}
              recipes={accountDetails.createdRecipes}
            /> */}
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Account
