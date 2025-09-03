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
        <p>{props.meal}</p>
        <p>{props.proteins}</p>
        <p>{props.fats}</p>
        <p>{props.carbs}</p>
        <p>{props.kcal}</p>
        <p>{props.volume}</p>
      </div>
    </>
  )
}

export default FoodItem