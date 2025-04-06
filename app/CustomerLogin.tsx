import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

export default function CustomerLogin() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.168.70.239:8000/api/emplogin",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "Login successful");
        const { token } = response.data;
        console.log("Auth Token:", token);
        router.push("/Query"); // Navigate to Query page
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        Alert.alert("Error", "Invalid credentials. Please try again.");
      } else if (error.response && error.response.status === 404) {
        Alert.alert("Error", "Email doesn't exist. Kindly sign up.");
      } else {
        Alert.alert("Error", "Something went wrong. Please try later.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Portal</Text>
      <TextInput
        style={styles.input}
        placeholder="Id"
        value={id}
        onChangeText={setId}
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#2b0f73",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    insetBlockEnd: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
