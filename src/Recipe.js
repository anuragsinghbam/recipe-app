import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className="recipe">
      <h1 className={style.title}>{title}</h1>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img src={image} alt="dish image" />
    </div>
  )
}

export default Recipe
