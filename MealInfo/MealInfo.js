import React, {useContext} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import MealListContext from '../Context/MealListContext';
import {themeColor} from '../GlobalStyles/Style';
import {mealInfoStyleSheet} from './MealInfoStyle';
const MealInfo = ({route}) => {
  const {mealList, setMealList} = useContext(MealListContext);
  const {id} = route.params;
  const meal = mealList.find(m => {
    return m.idMeal === id;
  });
  const keys = Object.keys(meal).filter(k => {
    return k.includes('strIngredient');
  });
  const ingredient = [];
  const ingredientListKeys = {};
  keys.forEach(k => {
    if (meal[k] !== null && meal[k] !== '') {
      ingredient.push(meal[k]);
      ingredientListKeys[meal[k]] = k;
    }
  });
  return (
    <View style={mealInfoStyleSheet.mainBodyStyle}>
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          zIndex: 100,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 50,
        }}>
        <View
          style={{
            width: 105,
            height: 105,
            borderWidth: 2,
            borderRadius: 10,
            elevation: 10,
            shadowColor: themeColor.secondary_dark,
            borderColor: themeColor.primary,
          }}>
          <Image
            style={{width: 100, height: 100, borderRadius: 10}}
            source={{uri: meal.strMealThumb}}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: themeColor.secondary,
          borderRadius: 10,
          marginLeft: 25,
          marginRight: 25,
          marginTop: 100,
          marginBottom: 50,
          flexGrow: 1,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={[mealInfoStyleSheet.textHeadingStyle, {marginTop: 80}]}>
            {meal.strMeal}
          </Text>
        </View>
        <ScrollView style={{marginBottom: 50}}>
          <View style={{margin: 10, padding: 10}}>
            <Text
              style={{
                color: themeColor.primary,
                fontSize: 20,
                fontWeight: '500',
              }}>
              Ingredients :
            </Text>
            <Text style={mealInfoStyleSheet.textNormalStyle}>
              {ingredient.join(', ')}
            </Text>
            <Text
              style={{
                color: themeColor.primary,
                fontSize: 20,
                fontWeight: '500',
                marginTop: 10,
              }}>
              Recipe :
            </Text>
            <Text style={mealInfoStyleSheet.textNormalStyle}>
              {meal.strInstructions}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export {MealInfo};
