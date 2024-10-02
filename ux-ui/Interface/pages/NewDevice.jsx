import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconBack from 'react-native-vector-icons/Ionicons';
import IconDevice from 'react-native-vector-icons/FontAwesome';
import FormStyle from '../components/formStyle';
import ToggleButton from '../components/toggleButtons';
import VolumeSlider from '../components/volumeSlider';
import { NumericInput } from '../components/numericalInput';
import CustomSelect from '../components/customSelect';
import StandarButton from '../components/standardButton';

const NewDevice = () => {
    const navigation = useNavigation();

    // Definir los estados
    const [name, setName] = useState('');
    const [activeDevice, setActiveDevice] = useState(null);
    const [activeColor, setActiveColor] = useState(null);
    const [toggleOptions, setToggleOptions] = useState({
        estado: null, 
        luces: null, 
        bocinas: null, 
        ajustes: null,
    });
    const [volume, setVolume] = useState(50);
    const [speed, setSpeed] = useState(0);
    const [angle, setAngle] = useState(0);
    const [angularSpeed, setAngularSpeed] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    // Volver a la pantalla principal
    const handleBackFunction = () => {
        navigation.navigate('Main');
    };

    const handleToggleSelect = (key, value) => {
        setToggleOptions(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const deviceTypes = [
        { id: 1, name: 'Luz', icon: 'lightbulb-o' },
        { id: 2, name: 'Termo', icon: 'thermometer-three-quarters' },
        { id: 3, name: 'Cámara', icon: 'camera' },
        { id: 4, name: 'Puerta', icon: 'home' },
        { id: 5, name: 'Ventilador', icon: 'snowflake-o' },
        { id: 6, name: 'Cerradura', icon: 'unlock-alt' },
        { id: 7, name: 'Sensor de movimiento', icon: 'street-view' },
        { id: 8, name: 'Altavoz', icon: 'music' },
    ];

    const colors = [
        { id: 1, color: '#ff66c4' },
        { id: 2, color: '#ff9966' },
        { id: 3, color: '#ffcc99' },
        { id: 4, color: '#ffffcc' },
        { id: 5, color: '#99ffcc' },
        { id: 6, color: '#66ffff' },
        { id: 7, color: '#ccffff' },
        { id: 8, color: '#99ccff' },
    ];

    const options = [
        { label: '30 fps', value: '30' },
        { label: '60 fps', value: '60' },
        { label: '120 fps', value: '120' },
    ];

    // Selección de dispositivo y color
    const handleDeviceSelect = (id) => {
        setActiveDevice(activeDevice === id ? null : id);
    };

    const handleColorSelect = (id) => {
        setActiveColor(activeColor === id ? null : id);
    };

    // Acciones del botón Aceptar
    const handleAccept = () => {
        const selectedValues = {
            name,
            activeDevice,
            activeColor,
            volume,
            estado: toggleOptions.estado,
            luces: toggleOptions.luces,
            bocinas: toggleOptions.bocinas,
            ajustes: toggleOptions.ajustes,
            speed,
            angle,
            angularSpeed,
            selectedOption,
        };
        
        console.log('Valores seleccionados:', selectedValues);

        // Resetear todos los estados a los valores por defecto
        setName('');
        setActiveDevice(null);
        setActiveColor(null);
        setVolume(50);
        setToggleOptions({
            estado: null, 
            luces: null, 
            bocinas: null, 
            ajustes: null,
        });
        setSpeed(0);
        setAngle(0);
        setAngularSpeed(0);
        setSelectedOption(null);

        navigation.navigate('Main');
    };

    const handleCancel = () => {      
        console.log('Cancelado');
        navigation.navigate('Main');
        setName('');
        setActiveDevice(null);
        setActiveColor(null);
        setVolume(50);
        setToggleOptions({
            estado: null, 
            luces: null, 
            bocinas: null, 
            ajustes: null,
        });
        setSpeed(0);
        setAngle(0);
        setAngularSpeed(0);
        setSelectedOption(null);
    };

    const renderColorRows = (colors, numColumns) => {
        const rows = [];
        for (let i = 0; i < colors.length; i += numColumns) {
            rows.push(colors.slice(i, i + numColumns));
        }
        return rows;
    };

    return (
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.backSpace}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackFunction}>
                    <IconBack name='chevron-back-sharp' size={32} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Agregar dispositivo</Text>
            </View>

            <View style={styles.deviceDataContainer}>
                <FormStyle
                    label="Nombre"
                    content={
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Nombre del dispositivo"
                        />
                    }
                />

                <FormStyle
                    label="Tipo"
                    content={
                        <View style={styles.deviceContainer}>
                            {deviceTypes.map((device) => (
                                <View key={device.id} style={styles.deviceWrapper}>
                                    <TouchableOpacity
                                        style={[styles.deviceButton, activeDevice === device.id ? styles.activeButton : null]}
                                        onPress={() => handleDeviceSelect(device.id)}
                                    >
                                        <IconDevice name={device.icon} size={32} color="black" />
                                    </TouchableOpacity>
                                    <Text style={styles.deviceButtonText}>{device.name}</Text>
                                </View>
                            ))}
                        </View>
                    }
                />

                <Text style={styles.subtitle}>Configuración</Text>

                <FormStyle
                    label="Color"
                    content={renderColorRows(colors, 4).map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.colorRow}>
                            {row.map((color) => (
                                <TouchableOpacity
                                    key={color.id}
                                    style={[styles.colorBox, { backgroundColor: color.color }, activeColor === color.id ? styles.activeColorBox : null]}
                                    onPress={() => handleColorSelect(color.id)}
                                />
                            ))}
                        </View>
                    ))}

                />

                <FormStyle
                    label="Estado"
                    content={
                        <ToggleButton
                            option1="Instalado"
                            option2="Por Instalar"
                            selectedOption={toggleOptions.estado}
                            onSelect={(value) => handleToggleSelect('estado', value)}
                        />
                    }
                />

                <FormStyle
                    label="Volumen"
                    content={
                        <VolumeSlider 
                            value={volume / 100}
                            onValueChange={(val) => setVolume(val * 100)}
                        />
                    }
                />

                <FormStyle
                    label="Velocidad (m/s)"
                    content={
                        <NumericInput 
                            value={speed} 
                            onValueChange={setSpeed} 
                            min={0} 
                            max={20}
                            step={1}
                        />
                    }
                />

                <FormStyle
                    label="Ángulo (°)"
                    content={
                        <NumericInput 
                            value={angle} 
                            onValueChange={setAngle} 
                            min={0} 
                            max={180}
                            step={5}
                        />
                    }
                />

                <FormStyle
                    label="Velocidad angular (°/s)"
                    content={
                        <NumericInput 
                            value={angularSpeed} 
                            onValueChange={setAngularSpeed} 
                            min={0} 
                            max={180}
                            step={5}
                        />
                    }
                />

                <FormStyle
                    label="Calidad de Video"
                    content={
                        <CustomSelect 
                            options={options} 
                            placeholder="Seleccione una opción" 
                            selectedOption={selectedOption} 
                            onSelect={setSelectedOption} 
                        />
                    }
                />
            </View>

            <View style={styles.emergencySpace}>
                <Text style={styles.subtitle}>Emergencia</Text>
                
                <FormStyle
                    label="Luces"
                    content={
                        <ToggleButton
                            option1="Activado"
                            option2="Desactivado"
                            selectedOption={toggleOptions.luces}
                            onSelect={(value) => handleToggleSelect('luces', value)}
                        />
                    }
                />

                <FormStyle
                    label="Bocinas"
                    content={
                        <ToggleButton
                            option1="Activado"
                            option2="Desactivado"
                            selectedOption={toggleOptions.bocinas}
                            onSelect={(value) => handleToggleSelect('bocinas', value)}
                        />
                    }
                />

                <FormStyle
                    label="Ajustes"
                    content={
                        <ToggleButton
                            option1="Restablecer"
                            option2="No Restablecer"
                            selectedOption={toggleOptions.ajustes}
                            onSelect={(value) => handleToggleSelect('ajustes', value)}
                        />
                    }
                />
            </View>

            <View style={styles.buttonSpace}>
                <StandarButton state="Cancelar" onPress={handleCancel} />
                <StandarButton state="Aceptar" onPress={handleAccept} />
                
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        justifyContent: 'flex-start',
        padding: 20,
    },
    backSpace: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    backButton: {
        marginTop: 4,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
    },
    deviceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    deviceWrapper: {
        alignItems: 'center',
        width: '22%',
        marginVertical: 3,
    },
    deviceButton: {
        backgroundColor: '#FFEBCD',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: '#DEB887',
    },
    deviceButtonText: {
        color: '#000',
        fontSize: 9,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    colorRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
    },
    colorBox: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    activeColorBox: {
        borderWidth: 2,
        borderColor: 'black',
    },

    emergencySpace: {
        backgroundColor: '#f1f1f1',
        paddingTop: 10,
    },

    buttonSpace: {
        flexDirection: 'row',
        justifyContent:'space-around',
        marginBottom: 20,
        marginTop: 10
    }
});

export default NewDevice;
