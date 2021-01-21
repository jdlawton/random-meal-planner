
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

const menu = {
    breakfast: '',
    lunch: '',
    dinner: '',
}

const selectMeal = mealArray => {
    return mealArray[Math.floor(Math.random() * mealArray.length)];
};

const displayMenu = menu => {
    console.log(`
    Your menu for today:
    Breakfast: ${menu.breakfast}
    Lunch: ${menu.lunch}
    Dinner: ${menu.dinner}
    Bone Apple Tea!`)

};

const generateMenu = menu => {
    menu.breakfast = selectMeal(breakfastArray);
    menu.lunch = selectMeal(lunchArray);
    menu.dinner = selectMeal(dinnerArray);

    displayMenu(menu);
};

generateMenu(menu);