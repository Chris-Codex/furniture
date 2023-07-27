import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen"
import BottomTabNavigation from './navigations/BottomTabNavigation';
import { Cart, ProductDetails } from './screens';

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


