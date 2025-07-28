import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#2c1810" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c1810',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            textShadowColor: '#ff0080',
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 8,
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: "Home",
            headerShown: true // Show header for home page
          }} 
        />
        <Stack.Screen 
          name="login" 
          options={{ 
            title: "Sign In",
            headerShown: false // Hide header for login page since it has its own design
          }} 
        />
        <Stack.Screen 
          name="signup" 
          options={{ 
            title: "Create Account",
            headerShown: false // Hide header for signup page since it has its own design
          }} 
        />
        <Stack.Screen 
          name="camera" 
          options={{ 
            title: "AR Camera",
            headerStyle: {
              backgroundColor: '#2c1810',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
            },
          }} 
        />
      </Stack>
    </>
  );
}
