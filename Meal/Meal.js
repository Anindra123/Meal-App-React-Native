import {Button, Image, Text, View} from 'react-native';
import React from 'react';
import {styles, themeColor} from '../GlobalStyles/Style';
import MealStyle from './MealStyle';
import {useNavigation} from '@react-navigation/native';
const Meal = ({meal}) => {
  const nav = useNavigation();
  return (
    <View style={[MealStyle.mealBoxStyle]}>
      <View style={[MealStyle.contentJustify]}>
        <Image style={MealStyle.imgStyle} source={{uri: meal.strMealThumb}} />
      </View>
      <View style={[MealStyle.textBoxStyle, MealStyle.contentJustify]}>
        <Text style={[MealStyle.mainHeadingStyle]}>{meal.strMeal}</Text>
        <Text style={styles.normalTextStyle}>{meal.strCategory}</Text>
      </View>
      <View style={{flexGrow: 1}}></View>
      <View style={[MealStyle.contentJustify]}>
        <Button
          title="Show"
          color={themeColor.primary}
          onPress={() => nav.navigate('Details', {id: meal.idMeal})}
        />
      </View>
    </View>
  );
};

export {Meal};
