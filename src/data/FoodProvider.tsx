import React, { createContext, useState, useContext } from "react"
import type { PropsWithChildren } from "react"
import { foods } from "./foods"
import { userFoods } from "./userFoods"

const allFoods = [...foods, ...userFoods];

interface Meal {
  id: string,
  name: string,
  volume: number,
  proteins: number,
  carbs: number,
  fats: number,
  kcal: number
}

interface FoodContextType {
  meals: Meal[];
  addMeal: (foodId: string, volume: number) => void;
  removeMeal: (id: string) => void;
  updateMeal: (id: string, updatedMeal: Meal) => void;
}

const FoodContext = createContext<FoodContextType>({
  meals: [],
  addMeal: () => { },
  removeMeal: () => { },
  updateMeal: () => { },
});

function FoodProvider({ children }: PropsWithChildren) {
  const [meals, setMeals] = useState<Meal[]>([
    // { id: 'meal-0', name: 'Чипсы', volume: 100, proteins: 14, carbs: 20, fats: 43, kcal: 612 },
    // { id: 'meal-1', name: 'Рис с курой', volume: 100, proteins: 14, carbs: 20, fats: 43, kcal: 412 }
  ]);

  const addMeal = (foodId: string, volume: number) => {
    const selectedFood = allFoods.find(food => food.id === foodId)

    if (selectedFood) {
      setMeals(prev => [...prev,
      {
        id: selectedFood.id,
        name: selectedFood.name,
        volume: volume,
        proteins: Math.ceil(selectedFood.proteins100 / 100 * volume),
        carbs: Math.ceil(selectedFood.carbs100 / 100 * volume),
        fats: Math.ceil(selectedFood.fats100 / 100 * volume),
        kcal: Math.ceil(selectedFood.kcal100 / 100 * volume)
      }
      ]);
    }


  };

  const removeMeal = (id: string) => {
    setMeals(prev => prev.filter(meal => meal.id !== id));
  };

  const updateMeal = (id: string, updatedMeal: Meal) => {
    setMeals(prev => prev.map(meal =>
      meal.id === id ? updatedMeal : meal
    ));
  };

  return (
    <FoodContext.Provider value={{
      meals,
      addMeal,
      removeMeal,
      updateMeal
    }
    }>
      {children}
    </FoodContext.Provider>
  )
}

export const useFood = () => {
  return useContext(FoodContext);
};

export { FoodContext, FoodProvider };