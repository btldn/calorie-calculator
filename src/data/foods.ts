type Food = {
  id: string; name: string;
  kcal100: number; proteins100: number; fats100: number; carbs100: number;
};

type AddOption = {
  id: string;
  name: string;
}

type Option = Food | AddOption;

export const foods: Option[] = [
  {
    id: '1',
    name: 'яблоко',
    kcal100: 55,
    proteins100: 0.3,
    fats100: 0.2,
    carbs100: 13,
  },
  {
    id: '2',
    name: 'рис варёный',
    kcal100: 130,
    proteins100: 2,
    fats100: 0.2,
    carbs100: 28,
  },
  {
    id: '3',
    name: 'куриная грудка варёная',
    kcal100: 150,
    proteins100: 30,
    fats100: 2,
    carbs100: 0.5,
  },
  {
    id: '4',
    name: 'банан',
    kcal100: 89,
    proteins100: 1.1,
    fats100: 0.3,
    carbs100: 23,
  },
  {
    id: '5',
    name: 'картофель отварной',
    kcal100: 86,
    proteins100: 2,
    fats100: 0.1,
    carbs100: 20,
  },
  {
    id: '6',
    name: 'гречка варёная',
    kcal100: 110,
    proteins100: 3.6,
    fats100: 1.3,
    carbs100: 21,
  },
  {
    id: '7',
    name: 'овсянка на воде',
    kcal100: 88,
    proteins100: 2.5,
    fats100: 1.7,
    carbs100: 15,
  },
  {
    id: '8',
    name: 'яйцо куриное варёное',
    kcal100: 155,
    proteins100: 13,
    fats100: 11,
    carbs100: 1.1,
  },
  {
    id: '9',
    name: 'творог нежирный',
    kcal100: 98,
    proteins100: 17,
    fats100: 0.6,
    carbs100: 3.4,
  },
  {
    id: '10',
    name: 'двойной биг спэшл',
    kcal100: 248,
    proteins100: 16,
    fats100: 15,
    carbs100: 11,
  },
  { 
    id: "add_new", 
    name: "Добавить своё..." 
  }
];