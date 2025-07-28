import { Link, useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { Alert, Button, Text, View } from "react-native";
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>AR Graffiti</Text>
      
      {user ? (
        // logged in user
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 16, marginBottom: 10, textAlign: "center" }}>
            Welcome, {user.email}!
          </Text>
          <Button title="Go to Camera" onPress={handleGoToCamera} />
          <Button title="Logout" onPress={handleLogout} color="#ff6b6b" />
        </View>
      ) : (
        // not logged in user
        <View style={{ gap: 10 }}>
          <Link href="/login" asChild>
            <Button title="Login" />
          </Link>
          <Link href="/signup" asChild>
            <Button title="Signup" />
          </Link>
        </View>
      )}
    </View>
  );
}
