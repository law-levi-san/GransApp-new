import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { useRouter } from "expo-router";

export default function PostQuery() {
  const router = useRouter();
  const [problemStatement, setProblemStatement] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!problemStatement || !description || !name || !phone || !companyName || !email) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await axios.post(
        "http://192.168.0.62:8000/api/postQuery", // ✅ Correct method (POST)
        {  
          
          problem_statement: problemStatement,
          description: description,
          company_name: companyName,
          phone_number: phone,
          name: name,
          email: email,
        },
        {
          headers: { "Content-Type": "application/json" }, // ✅ Ensure correct headers
        }
      );
  
      if (response.status === 200) {
        Alert.alert("Success", "Query submitted successfully!");
        router.push("/Query");
      }
    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);
      Alert.alert("Error", error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Submit Your Query</Text>

      <Text style={styles.label}>Problem Statement</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={problemStatement}
          style={styles.picker}
          onValueChange={(itemValue) => setProblemStatement(itemValue)}
        >
          <Picker.Item label="Select a problem" value="" />
          <Picker.Item label="Technical Issue" value="Technical Issue" />
          <Picker.Item label="Billing Issue" value="Billing Issue" />
          <Picker.Item label="General Query" value="General Query" />
        </Picker>
      </View>

      <Text style={styles.label}>Problem Description (max 150 words)</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Describe your problem..."
        value={description}
        onChangeText={setDescription}
        multiline
        maxLength={150}
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Company Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your company name"
        value={companyName}
        onChangeText={setCompanyName}
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        {loading ? (
          <Text style={styles.buttonText}>Submitting...</Text>
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  pickerContainer: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  textArea: {
    height: 100,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    textAlignVertical: "top",
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  button: {
    height: 50,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
