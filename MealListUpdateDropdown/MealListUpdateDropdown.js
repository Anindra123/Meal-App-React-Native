import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
const MealListUpdateDropdown = ({char, changeCh}) => {
  const {ch} = char;
  //   const {setCh} = changeCh;
  const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  return (
    <SelectDropdown
      buttonStyle={{
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'flex-start',
        width: '100%',
      }}
      defaultValue={ch}
      buttonTextStyle={{color: '#4c4c4c', textAlign: 'left'}}
      renderDropdownIcon={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextStyle={{
        color: '#4c4c4c',
        textAlign: 'left',
      }}
      rowStyle={{borderBottomWidth: 2}}
      onSelect={(item, idx) => {
        changeCh(item);
      }}
      buttonTextAfterSelection={(item, index) => {
        return item;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      data={data}
    />
  );
};
export {MealListUpdateDropdown};
