import './App.css'
import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'

function App() {
  // const APP_ID = '52b06f74a'
  // const APP_KEY = 'bc6ba384aca8f8c6cd35b81867b46b2ea'
  const APP_ID = '0a80c3a8'
  const APP_KEY = '03c8611f5870f7bc17c4cf28e84825f0'

  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('burger')
  const [search, setSearch] = useState('')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
  }

  function updateSearch(event) {
    setSearch(event.target.value)
  }

  function getSearch(event) {
    event.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          onChange={updateSearch}
          value={search}
        />
        <button className='search-button'>Search</button>
      </form>
      <h1 className='title'>List of Recipes</h1>
      <div className='dishes'>
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App
