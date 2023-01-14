import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({placeholder, value, onType}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
      />
    </View>
  );
};

export default Input;
