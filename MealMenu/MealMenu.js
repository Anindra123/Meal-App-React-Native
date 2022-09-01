import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {ActivityIndicator, Alert, ScrollView, Text, View} from 'react-native';
import MealListContext from '../Context/MealListContext';
import normalTextStyle, {styles, themeColor} from '../GlobalStyles/Style';
import {Meal} from '../Meal/Meal';
import MealInfo from '../MealInfo';
import MealListUpdateDropdown from '../MealListUpdateDropdown';
import MealSearchBar from '../MealSearchBar';
import {mealmenuStyleSheet} from './MealMenuStyle';
const MealMenu = () => {
  const [mealName, setMeal] = useState('');
  const [mealList, setMealList] = useState(null);
  const [error, setError] = useState(false);
  const [ch, setCh] = useState('a');
  const context = useContext(MealListContext);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${ch}`)
      .then(res => {
        setError(false);
        return res.json();
      })
      .then(r => {
        setError(false);
        setMealList(r['meals']);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  }, [ch]);
  useLayoutEffect(() => {
    context.setMealList(mealList);
  });
  const AlertError = () =>
    Alert.alert('Error', 'Error getting data', [
      {text: 'OK', onPress: () => console.log('OK pressed')},
    ]);

  const loadingData = () => {
    return (
      <View style={({alignItems: 'center'}, mealmenuStyleSheet.marginView)}>
        <ActivityIndicator size="large" color={themeColor.primary} />
      </View>
    );
  };
  const handMealSearchText = text => {
    setMeal(text);
  };
  const handleRecipeFilter = text => {
    setCh(text);
  };

  return (
    <>
      <View style={mealmenuStyleSheet.marginView}>
        <Text style={styles.secondheadingStyle}>Search for a recipe :</Text>
        {error && AlertError()}
        <MealSearchBar meal={mealName} changeMealSearch={handMealSearchText} />
        <Text style={[styles.secondheadingStyle, {marginTop: 20}]}>
          Filter recipe list :
        </Text>
        <MealListUpdateDropdown char={ch} changeCh={handleRecipeFilter} />
        {mealList === null ? (
          loadingData()
        ) : (
          <ScrollView style={{marginBottom: 610}}>
            {mealList
              .filter(m => {
                if (mealName === '') return true;
                return m.strMeal
                  .toLowerCase()
                  .startsWith(mealName.toLowerCase());
              })
              .map(m => {
                return <Meal key={m.idMeal} meal={m} />;
              })}
          </ScrollView>
        )}
      </View>
    </>
  );
};

export {MealMenu};
