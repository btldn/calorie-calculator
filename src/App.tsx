import { useState } from 'react'
import './App.css'
import InputFood from './components/InputFood'
import FoodItem from './components/FoodItem'
import DailyNutrition from './components/DailyNutrition'
import { useFood } from './data/FoodProvider'
import AddFoodPopup from './components/AddFoodPopup'


function App() {

  const { meals, addMeal } = useFood()
  const [isOpen, setOpen] = useState<boolean>(false)

  console.log(meals)
  const mealsList = meals.map((meal) => (
    <FoodItem
      id={meal.id}
      key={meal.id}
      meal={meal.name}
      proteins={meal.proteins}
      fats={meal.fats}
      carbs={meal.carbs}
      volume={meal.volume}
      kcal={meal.kcal}
    />
  ))

  return (
    <div className='diary__wrapper'>
      <AddFoodPopup isOpen={isOpen} closeAddFood={() => setOpen(false)}/>
      <InputFood onSubmit={addMeal} openAddFood={() => setOpen(true)}/>
      <DailyNutrition />
      <div className='diary__list'>
        <h3 className='diary__listTitle'>Дневник питания</h3>
        <div className='diary__listHeader'>
          {/* <span>Прием пищи</span> */}
          <span className='diary__listHeaderMeal'>Блюдо</span>
          <span className='diary__listHeaderKcal'>Калории</span>
          <span className='diary__listHeaderProteins'>Белок</span>
          <span className='diary__listHeaderFats'>Жиры</span>
          <span className='diary__listHeaderCarbs'>Углеводы</span>
          <span className='diary__listHeaderVolume'>Объем</span>
        </div>
        {mealsList}
      </div>
      <button onClick={() => setOpen(true)}>aboba</button>
    </div>
  )
}

export default App
