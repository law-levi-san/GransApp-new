import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        "http://192.168.70.239:8000/api/empsignup",
        {
          params: {
            id,
            name,
            email,
            password,
          },
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "Registration successful!");
        console.log("Redirecting to /Query");
        router.push("/Query");
      }
    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);
      Alert.alert(
        "Error",
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const navigateToLogin = () => {
    router.push("/CustomerLogin");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="id"
        value={id}
        onChangeText={setId}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="name"
        value={name}
        onChangeText={setname}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.infoText}>If an account already exists,</Text>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
  console.log("hello wasup");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f9fc",
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
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#007AFF", // Vibrant blue color for the button
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
