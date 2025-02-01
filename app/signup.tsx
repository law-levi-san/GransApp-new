import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSignUp = () => {
    // Add signup logic here
    alert("Sign Up Successful");
    router.push("/Query"); // Navigate to the signup page
  };

  const navigateToLogin = () => {
    router.push("/LoginScreen"); // Navigate to the login screen
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

      {/* Additional Text and Navigation */}
      <Text style={styles.infoText}>If account already exists,</Text>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f9fc", // Light background color
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333", // Darker text for better readability
  },
  input: {
    width: "90%", // Adjusted width for better alignment
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc", // Subtle border color
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  infoText: {
    marginTop: 20,
    fontSize: 16,
    color: "#666", // Slightly muted color for secondary text
  },
  loginText: {
    marginTop: 5,
    fontSize: 16,
    color: "#2b0f73", // A more vibrant blue color for the link
    textDecorationLine: "underline",
    fontWeight: "500", // Slightly bolder text for emphasis
  },
});
