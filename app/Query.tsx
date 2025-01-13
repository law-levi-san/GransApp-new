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

const Query: React.FC = () => {
  const [problemStatement, setProblemStatement] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!problemStatement || !description || !name || !phone || !companyName || !email) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }
    if (description.split(" ").length > 150) {
      Alert.alert("Error", "Problem description exceeds 150 words.");
      return;
    }
    Alert.alert("Success", "Query submitted successfully!");
    // Add your submission logic here
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
          <Picker.Item label="Technical Issue" value="technical" />
          <Picker.Item label="Billing Issue" value="billing" />
          <Picker.Item label="General Query" value="general" />
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
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Query;

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
