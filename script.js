
const breakfastArray = [
    'bacon and eggs',
    'toast',
    'yogurt',
    'pancakes',
    'bagel',
    'donut',
    'breakfast burrito',
    'fruit',
    'cereal',
    'oatmeal'
];
const lunchArray = [
    'tuna sandwich',
    'hamburger',
    'gyro',
    'tacos',
    'soup',
    'chicken salad',
    'pb & j',
    'salad',
    'pasty',
    'chili'
];
const dinnerArray = [
    'pot roast',
    'spaghetti and meatballs',
    'grilled salmon',
    'roast chicken',
    'pizza',
    'roast beef',
    'roasted brussel sprouts',
    'pork chops in mushroom gravy',
    'beef with broccoli',
    'curry'
];

const selectMeal = mealArray => {
    return mealArray[Math.floor(Math.random() * mealArray.length)];
};

const menu = {
    breakfast: selectMeal(breakfastArray),
    lunch: selectMeal(lunchArray),
    dinner: selectMeal(dinnerArray)
};

console.log(menu.breakfast);
console.log(menu.lunch);
console.log(menu.dinner);