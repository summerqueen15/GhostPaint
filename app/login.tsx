import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Text, TextInput, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/camera");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  const handleBackToHome = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Brick Wall Background */}
      <View style={styles.brickWall}>
        <LinearGradient
          colors={['#2c1810', '#4a2c1a', '#2c1810']}
          style={styles.brickGradient}
        />
        {/* Brick pattern overlay */}
        <View style={styles.brickPattern} />
      </View>
      
      {/* Neon spray paint effects */}
      <View style={styles.neonEffects}>
        <View style={[styles.neonSpray, styles.neonPink]} />
        <View style={[styles.neonSpray, styles.neonBlue]} />
        <View style={[styles.neonSpray, styles.neonGreen]} />
      </View>
      
      {/* Login Form Container */}
      <View style={styles.formContainer}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
          style={styles.formBackground}
        >
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to GhostPaint</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
            />
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
              <Text style={styles.primaryButtonText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.secondaryButton} onPress={handleBackToHome}>
              <Text style={styles.secondaryButtonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  
  // Brick Wall Background
  brickWall: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
  brickGradient: {
    flex: 1,
  },
  
  brickPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    opacity: 0.9,
  },
  
  // Neon Spray Paint Effects
  neonEffects: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  
  neonSpray: {
    position: 'absolute',
    borderRadius: 100,
    opacity: 0.3,
  },
  
  neonPink: {
    width: 100,
    height: 100,
    backgroundColor: '#ff0080',
    top: '10%',
    right: '15%',
    shadowColor: '#ff0080',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  
  neonBlue: {
    width: 70,
    height: 70,
    backgroundColor: '#00ffff',
    bottom: '15%',
    left: '10%',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  
  neonGreen: {
    width: 50,
    height: 50,
    backgroundColor: '#00ff80',
    top: '70%',
    right: '30%',
    shadowColor: '#00ff80',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },
  
  // Form Styling
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  
  formBackground: {
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    minWidth: width * 0.85,
    maxWidth: 400,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: '#ff0080',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  
  inputContainer: {
    width: '100%',
    marginBottom: 25,
  },
  
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  
  primaryButton: {
    backgroundColor: '#ff0080',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    minWidth: 200,
    alignItems: 'center',
    shadowColor: '#ff0080',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
  
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    minWidth: 200,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00ffff',
  },
  
  secondaryButtonText: {
    color: '#00ffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
