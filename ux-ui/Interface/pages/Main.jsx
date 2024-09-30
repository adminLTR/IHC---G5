import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Section } from '../components/section';
import { ControlButton } from '../components/controlButton';
import { AddModal } from '../components/addRoomModal'; 
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';

import IconAdd from 'react-native-vector-icons/Ionicons';

export function Main() {
    const insets = useSafeAreaInsets();
    const [modalVisible, setModalVisible] = useState(false);
    const [rooms, setRooms] = useState([]); // Inicialmente vacío
    const toast = useToast();
    const navigation = useNavigation();

    const handleAddFunction = () => {
        setModalVisible(true);
    };
    
    const closeModal = () => {
        setModalVisible(false);
    };

   const addNewRoom = (newRoom) => {
    const defaultButtons = [
        {
            icon: <IconAdd name="add-circle-sharp" size={80} color="black" />,
            label: null,
            onPress: () => navigation.navigate('NewDevice'),
        },
    ];
    setRooms([...rooms, { name: newRoom.name, buttons: defaultButtons }]);
    toast.show('Habitación agregada', { type: 'success' });
};

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            {rooms.length === 0 ? (
                // Mostrar mensaje si no hay habitaciones
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Agrega tu primera habitación</Text>
                </View>
            ) : (
                // Si hay habitaciones, renderizar la lista
                <ScrollView>
                    {rooms.map((room, index) => (
                        <Section key={index} title={room.name}>
                            {room.buttons.map((button, btnIndex) => (
                                <ControlButton key={btnIndex} iconSource={button.icon} label={button.label} onPress={button.onPress} />
                            ))}
                        </Section>
                    ))}
                </ScrollView>
            )}

            <TouchableOpacity style={styles.addRoomButton} onPress={handleAddFunction}>
                <Text style={styles.addRoomText}>+ Agregar habitación</Text>
            </TouchableOpacity>

            <AddModal 
                visible={modalVisible} 
                onClose={closeModal} 
                onConfirm={addNewRoom} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 32,
        maxWidth: '50%',
        color: '#aaa',
        textAlign: 'center'
    },
    addRoomButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addRoomText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Main;
