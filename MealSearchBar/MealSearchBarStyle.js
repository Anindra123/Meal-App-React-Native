import {StyleSheet} from 'react-native';
import {styles, themeColor} from '../GlobalStyles/Style';

const mealSearchBarStyleShett = StyleSheet.create({
  searchBoxStyle: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: themeColor.primary,
    marginTop: 20,
    backgroundColor: 'rgba(173, 173, 173, 0.17)',
    borderRadius: 5,
  },
});

export {mealSearchBarStyleShett};
