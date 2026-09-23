import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function InputM({ style, ...rest }) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#666"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    borderWidth: 5,         // Regra da inicial M
    borderRadius: 5,        // Regra da inicial M
    borderColor: '#333',
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
});
