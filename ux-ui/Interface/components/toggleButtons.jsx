import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButton = ({ option1, option2, selectedOption, onSelect }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, selectedOption === 'option1' && styles.activeButton]}
                onPress={() => onSelect('option1')}
            >
                <View style={[styles.innerCircle, selectedOption === 'option1' && styles.selectedInnerCircle]} />
                <Text style={styles.buttonText}>{option1}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, selectedOption === 'option2' && styles.activeButton]}
                onPress={() => onSelect('option2')}
            >
                <View style={[styles.innerCircle, selectedOption === 'option2' && styles.selectedInnerCircle]} />
                <Text style={styles.buttonText}>{option2}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 11,
        borderRadius: 25,
        width: '40%',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 5,
    },
    selectedInnerCircle: {
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 14,
        color: '#000',
    },
});

export default ToggleButton;
