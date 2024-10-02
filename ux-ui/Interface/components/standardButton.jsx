import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';


const StandarButton = ({ state, onPress }) => {
    const iconName = state === 'Aceptar' ? 'checkmark-circle' : 'close-circle';
    return (
        <TouchableOpacity
            style={[styles.button, state === 'Aceptar' ? styles.acceptButton : styles.cancelButton]}
            onPress={onPress}
        >
            <Icon name={iconName} size= {20} color='white'/>
            <Text style={styles.buttonText}>{state}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    acceptButton: {
        backgroundColor: '#4CAF50',
    },
    cancelButton: {
        backgroundColor: '#F44336',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default StandarButton;
