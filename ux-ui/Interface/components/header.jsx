import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import IconMenu from 'react-native-vector-icons/FontAwesome5';
import IconAlerts from 'react-native-vector-icons/Ionicons';
import IconUser from 'react-native-vector-icons/FontAwesome';


export function Header() {
  const handleMenuButtonPress = () => {
    console.log("Para el modal de Menu");
  };

  const handleUserButtonPress = () => {
    console.log("Para el modal de User");
  };

  const handleNotificationButtonPress = () => {
    console.log("Para el modal de Notification");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuButtonPress}>
        <IconMenu name="bars" size={38} color="black" />
      </TouchableOpacity>
      
      <View style={styles.rightButtonsContainer}>
        <View>
          <TouchableOpacity onPress={handleNotificationButtonPress}>
            <IconAlerts name="notifications" size={38} color="black" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.rightButton}>
          <TouchableOpacity onPress={handleUserButtonPress}>
            <IconUser name="user" size={38} color="black" />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10
  },

  rightButtonsContainer: {
    flexDirection: 'row',
  },

  rightButton: {
    paddingLeft: 10
  },
});
