import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

export function ControlButton({ iconSource, label, onPress, buttonColor }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: buttonColor }]}>
        {typeof iconSource === 'string' ? (
          <Image source={{ uri: iconSource }} style={styles.icon} />
        ) : (
          iconSource
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 70,      
    height: 70,
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});
