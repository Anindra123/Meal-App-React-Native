import React from 'react';
const MealListContext = React.createContext({
  mealList: [],
  setMealList: () => {},
});

export default MealListContext;
