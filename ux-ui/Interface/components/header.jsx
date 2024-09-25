import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const user_img = require('../img/red.png')
const notifications_img = require('../img/unown.png');
const menu_img = require('../img/rotom_dex.png');

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
        <Image source={menu_img} style={styles.icon} />
      </TouchableOpacity>
      
      <View style={styles.rightButtonsContainer}>
        <TouchableOpacity onPress={handleUserButtonPress}>
            <Image source={notifications_img} style={styles.icon} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleNotificationButtonPress}>
            <Image resizeMode="contain" source={user_img} style={styles.icon} />
        </TouchableOpacity>
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
  },

  rightButtonsContainer: {
    flexDirection: 'row',
  },

  icon: {
    
    width: 50,
    height: 50,
    }
});
