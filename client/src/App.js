import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import About from './pages/About.js'
import RecipeList from './pages/RecipeList'
import UpdateRecipe from './pages/UpdateRecipe'
import RecipeShow from './pages/OneRecipe.js'
import AddRecipeNew from './pages/AddRecipeNew.js'
import { getToken, removeToken } from './helpers/auth.js'
import SearchResults from './pages/SearchResults.js'
import Account from './pages/Account.js'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [showLogin, setShowLogin] = useState(false)
  const handleClose = () => setShowLogin(false)
  const handleShow = () => setShowLogin(true)

  const [showRegister, setShowRegister] = useState(false)
  const handleCloseRegister = () => setShowRegister(false)
  const handleShowRegister = () => setShowRegister(true)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  const handleLogout = () => {
    removeToken()
    setIsLoggedIn(false)
  }

  return (
    <BrowserRouter>
      <Header
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setShowLogin={setShowLogin}
        handleClose={handleClose}
        handleShow={handleShow}
        showLogin={showLogin}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        handleCloseRegister={handleCloseRegister}
        handleShowRegister={handleShowRegister}
      />
      <div className='full-flex-wrapper'>
        <main>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/recipes/new' element={<AddRecipeNew />} />
            <Route path='/recipes/:id/edit' element={<UpdateRecipe />} />
            <Route
              path='/account'
              element={
                <Account
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path='/recipes/:id'
              element={<RecipeShow isLoggedIn={isLoggedIn} />}
            />
            <Route path='/recipes' element={<RecipeList />} />
            <Route path='/search-results' element={<SearchResults />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </main>
        <Footer
          handleLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          handleShow={handleShow}
          handleShowRegister={handleShowRegister}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
