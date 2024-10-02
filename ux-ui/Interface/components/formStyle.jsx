import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormStyle = ({ label, content }) => {
    return (
        <View style={styles.form}>
            <View style={styles.column1}>
                <Text style={styles.form_text}>{label}</Text>
            </View>
            <View style={styles.column2}>
                {content}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    column1: {
        flex: 1,
    },
    column2: {
        flex: 2,
        marginRight: 30,
    },
    form_text: {
        marginVertical: 10,
        fontSize: 18,
        textAlign: 'right',
        paddingRight: 8,
        fontWeight: 'bold',
    },
});

export default FormStyle;
