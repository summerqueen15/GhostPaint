import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>AR Graffiti</Text>
      <Link href="/login" asChild>
        <Button title="Login" />
      </Link>
      <Link href="/signup" asChild>
        <Button title="Signup" />
      </Link>
    </View>
  );
}
