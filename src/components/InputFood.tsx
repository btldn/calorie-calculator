import { useFood } from "../data/FoodProvider"
import { foods } from "../data/foods"
import { userFoods } from "../data/userFoods"
import { useState } from "react"
import styles from './InputFood.module.css'
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


type InputFoodProps = {
  onSubmit: (id: string, volume: number) => void
  openAddFood: (isOpen: boolean) => void
}


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
        <Autocomplete
          className={styles.diary__inputMealName}
          options={foods}
          value={foods.find(food => food.id === selectedId)}
          onChange={(_, value) => {
            if (value?.id == 'add_new') {
              props.openAddFood(true)
              
            } else {
              setSelectedId(value ? value.id : "")
            }
          }

          }
          getOptionLabel={(food) => food.name}
          noOptionsText="Добавить своё..."
          renderInput={(params) => (
            <TextField
              {...params}
              label="Блюдо"
              placeholder="Начните вводить..."
            />)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "none" },
            },
          }}
          renderOption={(props, option) => (
            <li {...props} style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{option.name}</span>
              <span style={{ fontSize: 12, opacity: 0.8 }}>{option.kcal100} ккал/100г</span>
            </li>
          )

          }

        />

        <input
          className={styles.diary__inputMealVolume}
          type="text"
          placeholder="Введи объем..."
          value={inputVolume}
          onChange={(e) => setInputVolume(+e.target.value || 0)}
        />

        <button
          className={styles.diary__inputMealSubmit}
          type="submit"
          onClick={handleSubmit}>
          Добавить
        </button>
      </div>
    </>
  )
}

export default InputFood
