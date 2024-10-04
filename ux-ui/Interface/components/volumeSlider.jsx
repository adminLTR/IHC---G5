import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const VolumeSlider = ({ value, onValueChange }) => {
    const [isSliding, setIsSliding] = React.useState(false);

    return (
        <View style={styles.container}>
            {isSliding && (
                <View style={[styles.labelContainer, { left: `${value * 100}%` }]}>
                    <Text style={styles.label}>{(value * 100).toFixed(0)}%</Text>
                </View>
            )}
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                value={value}
                onValueChange={onValueChange}
                onSlidingStart={() => setIsSliding(true)}
                onSlidingComplete={() => setIsSliding(false)}
                minimumTrackTintColor="black"
                maximumTrackTintColor="#858585"
                thumbTintColor="black"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 3,
        alignItems: 'center',
        position: 'relative'
    },
    slider: {
        width: '100%',
        height: 40,
    },
    labelContainer: {
        position: 'absolute',
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ translateX: -7 }],
    },
    label: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default VolumeSlider;
