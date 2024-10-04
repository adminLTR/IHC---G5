import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Section } from '../components/section';
import { ControlButton } from '../components/controlButton';
import { AddModal } from '../components/addRoomModal'; 
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';

import IconAdd from 'react-native-vector-icons/Ionicons';
import IconCustom from 'react-native-vector-icons/MaterialIcons';

export function Main() {

    
    const insets = useSafeAreaInsets();
    const [modalVisible, setModalVisible] = useState(false);
    const [roomsByFloor, setRoomsByFloor] = useState({});
    const toast = useToast();
    const navigation = useNavigation();

    const buttonColors = [
        '#ff66c4', '#ff9966', '#ffcc99', '#ffffcc', '#99ffcc', 
        '#66ffff', '#ccffff', '#99ccff', '#ff66c4', '#ff9966',
         '#ffcc99', '#ffffcc', '#fff', 
    ];

   
    useEffect(() => {
        const defaultButtons = [
            { icon: <IconCustom name="lightbulb" size={50} color="black" />, label: 'Luz' },
            { icon: <IconCustom name="tv" size={50} color="black" />, label: 'TV' },
            { icon: <IconCustom name="ac-unit" size={50} color="black" />, label: 'Aire' },
            { icon: <IconCustom name="speaker" size={50} color="black" />, label: 'Parlante' },
            { icon: <IconCustom name="router" size={50} color="black" />, label: 'Router' },
            { icon: <IconCustom name="lock" size={50} color="black" />, label: 'Cerradura' },
            { icon: <IconCustom name="camera" size={50} color="black" />, label: 'Cámara' },
            { icon: <IconCustom name="sensor-door" size={50} color="black" />, label: 'Sensor\nPuerta' },
            { icon: <IconCustom name="thermostat" size={50} color="black" />, label: 'Termostato' },
            { icon: <IconCustom name="blender" size={50} color="black" />, label: 'Licuadora' },
            { icon: <IconCustom name="alarm" size={50} color="black" />, label: 'Alarma' },
            { icon: <IconCustom name="microwave" size={50} color="black" />, label: 'Microondas' },
            
            { 
                icon: <IconAdd name="add-circle-outline" size={70} color="black" />, 
                label: 'Añadir\nDispositivo',
                buttonColor: 'transparent',
                onPress: () => navigation.navigate('NewDevice'),
            },
        ].map((button, index) => ({
            ...button,
            buttonColor: buttonColors[index % buttonColors.length], 
        }));

        setRoomsByFloor({
            1: [{ name: 'Habitación 1', buttons: defaultButtons }]
        });
    }, []);

    const handleAddFunction = () => {
        setModalVisible(true);
    };
    
    const closeModal = () => {
        setModalVisible(false);
    };

    const addNewRoom = (newRoom) => {
        const defaultButtons = [
            {
                icon: <IconAdd name="add-circle-outline" size={70} color="black" />,
                label: 'Añadir\nDispositivo',
                onPress: () => navigation.navigate('NewDevice'),
            },
        ];

       
        setRoomsByFloor((prevRoomsByFloor) => {
            const roomsInFloor = prevRoomsByFloor[newRoom.floor] || [];
            return {
                ...prevRoomsByFloor,
                [newRoom.floor]: [...roomsInFloor, { name: newRoom.name, buttons: defaultButtons }],
            };
        });

        toast.show('Habitación agregada', { type: 'success' });
    };

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            {Object.keys(roomsByFloor).length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Agrega tu primera habitación</Text>
                </View>
            ) : (
                <ScrollView>
                    {Object.keys(roomsByFloor).map((floor) => (
                        <View key={floor}>
                            <Text style={styles.floorTitle}>Piso {floor}</Text>
                            {roomsByFloor[floor].map((room, index) => (
                                <Section key={index} title={room.name}>
                                    {room.buttons.map((button, btnIndex) => (
                                        <ControlButton key={btnIndex} iconSource={button.icon} label={button.label} buttonColor={button.buttonColor} onPress={button.onPress || null} />
                                    ))}
                                </Section>
                            ))}
                        </View>
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
    floorTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 10,
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
