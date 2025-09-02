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
      <p>{props.meal}</p>
      <div>
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