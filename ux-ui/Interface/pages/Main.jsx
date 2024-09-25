
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Section } from '../components/section';
import { ControlButton } from '../components/controlButton';
import { AddModal } from '../components/addRoomModal'; 


const add_img = require('../img/abra.png');
const lights_img = require('../img/chandelure.png');
const audio_img = require('../img/exploud.png');
const camara_img = require('../img/detective_pikachu.png');
const fridge_img = require('../img/rotom_frio.png');
const door_img = require('../img/starly.png');
const irrigation_img = require('../img/vaporeon.png');

export function Main() {
    const insets = useSafeAreaInsets();
    const [modalVisible, setModalVisible] = useState(false);

    const handleAddFunction = () => {
        setModalVisible(true);
    };
    
    const closeModal = () => {
        setModalVisible(false);
    };

    // Definir los botones de cada sección
    const kitchenButtons = [
        { icon: lights_img, label: "Luces" },
        { icon: audio_img, label: "Audio" },
        { icon: camara_img, label: "Cámara" },
        { icon: fridge_img, label: "Refrigerador" },
        { icon: audio_img, label: "Audio" },
        { icon: camara_img, label: "Cámara" },
        { icon: fridge_img, label: "Refrigerador" },
        { icon: audio_img, label: "Audio" },
        { icon: camara_img, label: "Cámara" },
        { icon: fridge_img, label: "Refrigerador" },
    ];

    const exteriorButtons = [
        { icon: door_img, label: "Puerta 1" },
        { icon: irrigation_img, label: "Riego" },
        { icon: camara_img, label: "Cámara" },
    ];

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <Section title="Cocina">
                {kitchenButtons.map((button, index) => (
                    <ControlButton key={index} iconSource={button.icon} label={button.label} />
                ))}
                <ControlButton iconSource={add_img} label={null} />
            </Section>
            
            <Section title="Exterior">
                {exteriorButtons.map((button, index) => (
                    <ControlButton key={index} iconSource={button.icon} label={button.label} />
                ))}
                <ControlButton iconSource={add_img} label={null} />
            </Section>

            <TouchableOpacity style={styles.addRoomButton} onPress={handleAddFunction}>
                <Text style={styles.addRoomText}>+ Agregar habitación</Text>
            </TouchableOpacity>

            <AddModal visible={modalVisible} onClose={closeModal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    addRoomButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 20,
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
