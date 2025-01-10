import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Add signup logic here
    alert("Sign Up Successful");
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#eaf2f8", // Subtle blue-gray background
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
      color: "#2c3e50", // Deep blue for contrast
      marginBottom: 40,
      textAlign: "center",
    },
    input: {
      width: "70%",
      height: 50,
      borderWidth: 1,
      borderColor: "#bdc3c7",
      backgroundColor: "#ffffff",
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 20,
      fontSize: 16,
      shadowColor: "#aaa",
      shadowOpacity: 0.15,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 4 },
      elevation: 3,
    },
    button: {
      width: "90%",
      height: 50,
      backgroundColor: "#3498db", // Refined blue color
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 15,
      shadowColor: "#2980b9",
      shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 4 },
      elevation: 4,
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "600",
    },
    secondaryButton: {
      backgroundColor: "#ecf0f1", // Light gray for secondary actions
      borderWidth: 1,
      borderColor: "#dcdde1",
      shadowColor: "#bdc3c7",
    },
    secondaryButtonText: {
      color: "#2c3e50",
      fontSize: 16,
      fontWeight: "500",
    },
    staffButton: {
      backgroundColor: "#2ecc71", // Green for differentiation
      shadowColor: "#27ae60",
      shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 4 },
      elevation: 4,
    },
    staffButtonText: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "600",
    },
  });
  