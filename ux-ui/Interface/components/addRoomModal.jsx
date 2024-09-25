import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FunctionModal } from './modal';
import { NumericInput } from './numericalInput';

export function AddModal({ visible, onClose }) {
    const [name, setName] = useState('');
    const [floor, setFloor] = useState(1);

    const handleSubmit = () => {
        Alert.alert('Datos enviados', `Nombre: ${name}, Piso: ${floor}`);
        onClose();
    };

    return (
        <FunctionModal
            title="Añadir Habitación"
            content={
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.column1}>
                            <Text style={styles.form_text}>Nombre</Text>
                        </View>
                        <View style={styles.column2}>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                placeholder="Nombre habitación"
                            />
                        </View>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.column1}>
                            <Text style={styles.form_text}>Piso</Text>
                        </View>
                        <View style={styles.column2}>
                            <NumericInput 
                                initialValue={1} 
                                min={1} 
                                max={7} 
                                onValueChange={setFloor}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
            }
            visible={visible}
            onClose={onClose}
        />
    );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    form: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    column1: {
        flex: 1,
    },
    column2: {
        flex: 2,
    },
    form_text: {
        marginVertical: 10,
        fontSize: 18,
        textAlign: 'right',
        paddingRight: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
    },
    submitButton: {
        backgroundColor: 'green',
        marginTop:5,
        padding: 3,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal:50,
        width: '60%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',

    },
});
