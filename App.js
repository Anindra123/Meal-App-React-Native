/**
 * Sample React Native App
 * https://github.com/facebook/react-native

*/

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles, themeColor} from './GlobalStyles/Style';
import MealMenu from './MealMenu';
import MealInfo from './MealInfo';
import MealListContext from './Context/MealListContext';

const Heading = props => {
  return <Text style={styles.mainHeadingStyle}>{props.heading}</Text>;
};

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: themeColor.secondary_light,
        flex: 1,
        padding: 10,
      }}>
      <View style={{marginTop: 20}}>
        <Heading heading="Meal App" />
        <MealMenu />
      </View>
    </SafeAreaView>
  );
};
const Stack = createNativeStackNavigator();
const App = () => {
  const [mealList, setMealList] = useState([]);
  const value = {mealList, setMealList};
  return (
    <MealListContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={MealInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </MealListContext.Provider>
  );
};

export default App;
