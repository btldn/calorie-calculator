import { foods } from "../data/foods"
import { userFoods } from "../data/userFoods"

const foodList = foods.concat(userFoods).map((food) => 
  <option value={food.name}>{food.name}</option>
)

function InputFood() {
  return (
    <>
      <form action="">
        <select>
          {foodList}
        </select>
        <button type="submit">да</button>
      </form>
    </>
  )
}

export default InputFood
