import {StyleSheet} from 'react-native';
import {themeColor} from '../GlobalStyles/Style';

const MealStyle = StyleSheet.create({
  mealBoxStyle: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: themeColor.primary,
    width: '100%',
  },
  mainHeadingStyle: {
    fontSize: 15,
    fontWeight: '700',
    color: themeColor.secondary_dark,
  },
  textBoxStyle: {alignContent: 'flex-start', flexShrink: 1, marginLeft: 10},
  imgStyle: {width: 50, height: 50},
  contentJustify: {justifyContent: 'center'},
});
export default MealStyle;
