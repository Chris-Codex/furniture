import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen"

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  })

  // Callback function to be executed when the root view layout changes
  const onLayoutRootView = useCallback(async () => {
    // Check if all custom fonts are loaded and available (fontsLoaded is true)
    if (fontsLoaded) {
      // If fonts are loaded, hide the splash screen asynchronously
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  // Check if fonts are still loading; if not, return null to prevent rendering until fonts are ready
  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
