import { Link, useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { Alert, Button, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../firebaseConfig";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert("Success", "Logged out successfully");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  const handleGoToCamera = () => {
    router.push("/camera");
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
      
      {/* Professional Navigation Container */}
      <View style={styles.navContainer}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
          style={styles.navBackground}
        >
          <Text style={styles.title}>GhostPaint</Text>
          <Text style={styles.subtitle}>AR Graffiti Experience</Text>
          
          {user ? (
            // Logged in user
            <View style={styles.buttonContainer}>
              <Text style={styles.welcomeText}>
                Welcome, {user.email?.split('@')[0]}!
              </Text>
              
              <TouchableOpacity style={styles.primaryButton} onPress={handleGoToCamera}>
                <Text style={styles.primaryButtonText}>Launch Camera</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.secondaryButton} onPress={handleLogout}>
                <Text style={styles.secondaryButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          ) : (
            // Not logged in user
            <View style={styles.buttonContainer}>
              <Text style={styles.tagline}>Create digital art in the real world</Text>
              
              <Link href="/login" asChild>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Login</Text>
                </TouchableOpacity>
              </Link>
              
              <Link href="/signup" asChild>
                <TouchableOpacity style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
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
    // Create brick pattern using shadows and borders
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    // Add subtle texture
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
    width: 120,
    height: 120,
    backgroundColor: '#ff0080',
    top: '15%',
    right: '10%',
    shadowColor: '#ff0080',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  
  neonBlue: {
    width: 80,
    height: 80,
    backgroundColor: '#00ffff',
    bottom: '20%',
    left: '15%',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  
  neonGreen: {
    width: 60,
    height: 60,
    backgroundColor: '#00ff80',
    top: '60%',
    right: '25%',
    shadowColor: '#00ff80',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },
  
  // Professional Navigation
  navContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  
  navBackground: {
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    minWidth: width * 0.8,
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
    fontSize: 36,
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
  
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  
  welcomeText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  
  tagline: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
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
