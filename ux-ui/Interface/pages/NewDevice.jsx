import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconBack from 'react-native-vector-icons/Ionicons';

const NewDevice = () => {
    const navigation = useNavigation();

    const handleBackFunction = () => {
        navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
            <View style={styles.backSpace}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackFunction}>
                    <IconBack name='chevron-back-sharp' size={32} color="black" />
                </TouchableOpacity>

                <Text style={styles.title}> Agregar dispositivo</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    backSpace: {
        flexDirection: 'row',
        marginLeft: 20
    },

    backButton: {
        marginTop: 4,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
});

export default NewDevice;
