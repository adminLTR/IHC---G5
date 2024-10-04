import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const CustomSelect = ({ options, placeholder, selectedOption, onSelect }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleOptionPress = (option) => {
        onSelect(option);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.selectButton} 
                onPress={() => setDropdownVisible(!isDropdownVisible)}
            >
                <Text style={styles.selectButtonText}>
                    {selectedOption ? selectedOption.label : placeholder}
                </Text>
            </TouchableOpacity>

            {isDropdownVisible && (
                <View style={styles.dropdown}>
                    <ScrollView>
                        {options.map((item) => (
                            <TouchableOpacity 
                                key={item.value.toString()} 
                                style={styles.option} 
                                onPress={() => handleOptionPress(item)}
                            >
                                <Text style={styles.optionText}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    selectButton: {
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    selectButtonText: {
        fontSize: 16,
    },
    dropdown: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        maxHeight: 150, 
    },
    option: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: {
        fontSize: 16,
    },
});

export default CustomSelect;
