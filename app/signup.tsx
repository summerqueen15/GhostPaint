import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Text, TextInput, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../firebaseConfig";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
        <View style={[styles.neonSpray, styles.neonYellow]} />
      </View>
      
      {/* Signup Form Container */}
      <View style={styles.formContainer}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
          style={styles.formBackground}
        >
          <Text style={styles.title}>Join GhostPaint</Text>
          <Text style={styles.subtitle}>Create your AR graffiti account</Text>
          
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
            
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
              secureTextEntry
            />
          </View>
          
          <Text style={styles.passwordHint}>
            Password must be at least 6 characters
          </Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton} onPress={handleSignup}>
              <Text style={styles.primaryButtonText}>Create Account</Text>
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
    width: 90,
    height: 90,
    backgroundColor: '#ff0080',
    top: '8%',
    right: '12%',
    shadowColor: '#ff0080',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  
  neonBlue: {
    width: 75,
    height: 75,
    backgroundColor: '#00ffff',
    bottom: '12%',
    left: '8%',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  
  neonGreen: {
    width: 55,
    height: 55,
    backgroundColor: '#00ff80',
    top: '65%',
    right: '28%',
    shadowColor: '#00ff80',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },
  
  neonYellow: {
    width: 40,
    height: 40,
    backgroundColor: '#ffff00',
    top: '25%',
    left: '5%',
    shadowColor: '#ffff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
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
    textShadowColor: '#00ff80',
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
    marginBottom: 10,
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
  
  passwordHint: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  
  primaryButton: {
    backgroundColor: '#00ff80',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    minWidth: 200,
    alignItems: 'center',
    shadowColor: '#00ff80',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
  
  primaryButtonText: {
    color: '#000',
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
