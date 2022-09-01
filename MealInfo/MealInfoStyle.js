import {StyleSheet} from 'react-native';
import {themeColor} from '../GlobalStyles/Style';

const mealInfoStyleSheet = new StyleSheet.create({
  mainBodyStyle: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: themeColor.primary,
  },
  textHeadingStyle: {
    fontSize: 30,
    color: themeColor.secondary_dark,
    textAlign: 'center',
  },
  textNormalStyle: {
    fontSize: 15,
    color: themeColor.secondary_dark,
    marginTop: 5,
  },
});
export {mealInfoStyleSheet};
