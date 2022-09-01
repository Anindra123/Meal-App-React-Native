import {StyleSheet} from 'react-native';

const themeColor = {
  primary: '#ff9f23',
  secondary: '#ffffff',
  secondary_dark: '#000000',
  secondary_light: '#f9f9f9',
};

const styles = StyleSheet.create({
  normalTextStyle: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: themeColor.secondary_dark,
    fontWeight: '400',
  },
  secondheadingStyle: {
    fontSize: 22,
    fontFamily: 'Arial',
    color: themeColor.primary,
    fontWeight: '200',
  },
  mainHeadingStyle: {
    fontSize: 50,
    textAlign: 'center',
    color: themeColor.primary,
    fontWeight: '600',
  },
});

export {styles, themeColor};
