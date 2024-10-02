import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FunctionModal } from './modal';
import { NumericInput } from './numericalInput';
import { useToast } from 'react-native-toast-notifications';
import FormStyle from './formStyle'; 

export function AddModal({ visible, onClose, onConfirm }) {
    const [name, setName] = useState('');
    const [floor, setFloor] = useState(1);
    const toast = useToast();

    const handleSubmit = () => {
        if (name.trim() === '') {
            toast.show('El nombre de la habitación no puede estar vacío', {
                type: 'danger',
            });
            return;
        }
        
        onConfirm({ name, floor }); // Enviar los datos al componente padre
        
        setName('');
        setFloor(1);

        onClose();
    };

    return (
        <FunctionModal
            title="Añadir Habitación"
            content={
                <View style={styles.content}>
                    <FormStyle
                        label="Nombre"
                        content={
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                placeholder="Nombre habitación"
                            />
                        }
                    />

                    <FormStyle
                        label="Piso"
                        content={
                            <NumericInput 
                                value={floor} 
                                onValueChange={setFloor}
                                min={1} 
                                max={7}
                                step={1} 
                                
                            />
                        }
                    />

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
        marginTop: 5,
        padding: 3,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 50,
        width: '60%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
