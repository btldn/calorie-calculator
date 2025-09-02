import { useState } from 'react'
import './App.css'
import InputFood from './components/InputFood'
import FoodItem from './components/FoodItem'
import { useFood } from './data/FoodProvider'



function App() {
const { meals } = useFood()
console.log(meals)
const mealsList = meals.map((meal) => (
  <FoodItem id={meal.id} key={meal.id} meal={meal.name} proteins={meal.proteins} fats={meal.fats} carbs={meal.carbs} volume={meal.volume} kcal={meal.kcal}/>
))

  return (
    <>
      <InputFood />
      <div>
        {mealsList}
      </div>
    </>
  )
}

export default App
