import styles from './FoodItem.module.css'

type food = {
  id: string;
  meal: string;
  proteins: number;
  fats: number;
  carbs: number;
  kcal: number;
  volume: number;
}

function FoodItem(props: food) {
  return (
    <>
      <div className={styles.diary__meal}>
        <p className={styles.diary__mealName}>{props.meal}</p>
        <p className={styles.diary__mealKcal}>{props.kcal}</p>
        <p className={styles.diary__mealProteins}>{props.proteins}</p>
        <p className={styles.diary__mealFats}>{props.fats}</p>
        <p className={styles.diary__mealCarbs}>{props.carbs}</p>
        <p className={styles.diary__mealVolume}>{props.volume}</p>
      </div>
    </>
  )
}

export default FoodItem