import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export function ControlButton({ iconSource, label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {typeof iconSource === 'string' ? (
        <Image source={{ uri: iconSource }} style={styles.icon} />
      ) : (
        iconSource // Renderiza el componente de icono si no es una string
      )}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    marginVertical: 5,
  },
  icon: {
    width: 80,
    height: 80,
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});