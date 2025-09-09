import { useFood } from "../data/FoodProvider"
import styles from './DailyNutrition.module.css'


function DailyNutrition() {

  const { meals } = useFood()

  return (
    <div className={styles.diary__dailyWrapper}>
      <div className={styles.diary__dailyPFCK}>
        <div className={styles.diary__dailyPFCKIcon}>

        </div>
        <div className={styles.diary__dailyPFCKText}>
          <p>Калории</p>
          <span>{meals.reduce((acc, meal) => acc + meal.kcal, 0)}</span>
        </div>
      </div>
      <div className={styles.diary__dailyPFCK}>
        <div className={styles.diary__dailyPFCKIcon}>

        </div>
        <div className={styles.diary__dailyPFCKText}>
          <p>Белок</p>
          <span>{meals.reduce((acc, meal) => acc + meal.proteins, 0)}</span>
        </div>
      </div>
      <div className={styles.diary__dailyPFCK}>
        <div className={styles.diary__dailyPFCKIcon}>

        </div>
        <div className={styles.diary__dailyPFCKText}>
          <p>Углеводы</p>
          <span>{meals.reduce((acc, meal) => acc + meal.carbs, 0)}</span>
        </div>
      </div>
      <div className={styles.diary__dailyPFCK}>
        <div className={styles.diary__dailyPFCKIcon}>

        </div>
        <div className={styles.diary__dailyPFCKText}>
          <p>Жиры</p>
          <span>{meals.reduce((acc, meal) => acc + meal.fats, 0)}</span>
        </div>
      </div>
    </div>
  )
}

export default DailyNutrition