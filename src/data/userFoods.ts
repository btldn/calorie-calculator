type food = {
	id: string;
	name: string;
	carbs100: number;
	fats100: number;
	proteins100: number;
	kcal100: number;
}

export const userFoods: food[] = [
	{
		id: 'user-1',
		name: 'плов',
		kcal100: 300,
		proteins100: 10,
		fats100: 16,
		carbs100: 30,
	},
	{
		id: 'user-2',
		name: 'шашлык',
		kcal100: 320,
		proteins100: 0.3,
		fats100: 0.2,
		carbs100: 13,
	},
	{
		id: 'user-3',
		name: 'шаверма',
		kcal100: 55,
		proteins100: 0.3,
		fats100: 0.2,
		carbs100: 13,
	},
]