import React, { createContext, useState, useContext } from "react"
import type { PropsWithChildren } from "react"


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
  addMeal: (meal: Meal) => void;
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
    { id: 'meal-0', name: 'Чипсы', volume: 100, proteins: 14, carbs: 20, fats: 43, kcal: 612 },
    { id: 'meal-1', name: 'Рис с курой', volume: 100, proteins: 14, carbs: 20, fats: 43, kcal: 412 }
  ]);

  const addMeal = (meal: Meal) => {
    setMeals(prev => [...prev, meal]);
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