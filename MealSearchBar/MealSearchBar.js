import React from 'react';
import {Text, View, TextInput} from 'react-native';
import normalTextStyle, {styles} from '../GlobalStyles/Style';
import {mealSearchBarStyleShett} from './MealSearchBarStyle';
const MealSearchBar = ({changeMealSearch, meal}) => {
  return (
    <View>
      <TextInput
        style={(normalTextStyle, mealSearchBarStyleShett.searchBoxStyle)}
        onChangeText={text => changeMealSearch(text)}
        placeholder="Enter meal name"
        keyboardType="default"
        value={meal}
      />
    </View>
  );
};

export {MealSearchBar};
