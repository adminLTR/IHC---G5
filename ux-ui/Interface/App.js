import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';

import IconSucess from 'react-native-vector-icons/AntDesign';
import IconDanger from 'react-native-vector-icons/MaterialIcons';
import IconWarning from 'react-native-vector-icons/FontAwesome';
import IconNormal from 'react-native-vector-icons/Entypo';

import AppNavigator from './AppNavigator';

import { Header } from './components/header';

export default function App() {
  return (
    <ToastProvider
      placement="top"
      duration={1000}
      offsetTop={50}
      animationType="zoom-in"
      swipeEnabled={true}

      successColor="green"
      dangerColor="red"
      warningColor="orange"
      normalColor="gray"
      successIcon={<IconSucess name="checkcircle" size={20} color="white" />}
      dangerIcon={<IconDanger name="dangerous" size={20} color="white" />}
      warningIcon={<IconWarning name="warning" size={20} color="white" />}
      normalIcon={<IconNormal name="info-with-circle" size={20} color="white" />}

      textStyle={{ fontSize: 14 }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar style='light' />
          <Header />
          <AppNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
  },
});
