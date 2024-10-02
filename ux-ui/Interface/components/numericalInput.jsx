import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function NumericInput({ 
    value, 
    onValueChange, 
    min = 1, 
    max = 7, 
    step = 1
}) {
    const increment = () => {
        if (value + step <= max) {
            onValueChange(value + step);
        }
    };

    const decrement = () => {
        if (value - step >= min) {
            onValueChange(value - step);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={decrement} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{value}</Text>
            </View>
            <TouchableOpacity onPress={increment} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    valueContainer: {
        borderColor: "#c5c5c5",
        borderWidth: 2,
        flex: 1,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: "#c5c5c5",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    valueText: {
        fontSize: 18,
        minWidth: 30,
        textAlign: 'center',
    },
});
