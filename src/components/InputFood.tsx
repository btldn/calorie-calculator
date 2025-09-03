import { useFood } from "../data/FoodProvider"
import { foods } from "../data/foods"
import { userFoods } from "../data/userFoods"
import { useState } from "react"
import styles from './InputFood.module.css'


type InputFoodProps = {
  onSubmit: (id: string, volume: number) => void
}

const foodList = foods.concat(userFoods).map((food) =>
  <option key={food.id} value={food.id}>{food.name}</option>
)

function InputFood(props: InputFoodProps) {

  const [selectedId, setSelectedId] = useState<string>('')
  const [inputVolume, setInputVolume] = useState<number>()

  const { addMeal } = useFood()

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (inputVolume && selectedId) {
      addMeal(selectedId, inputVolume)
    }
  }

  return (
    <>
      <div className={styles.diary__inputMeal}>
        <select
          name="foodList"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          {foodList}
        </select>
        <input
          type="text"
          placeholder="Введи объем..."
          value={inputVolume}
          onChange={(e) => setInputVolume(+(e.target.value))}
        >

        </input>
        <button type="submit" onClick={handleSubmit}>да</button>
      </div>
    </>
  )
}

export default InputFood
