import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

export default function Staff() {
  const [queries, setQueries] = useState<string>("Loading...");

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get("http://192.168.0.62:8000/api/displayquerystaff", {
        headers: { "Content-Type": "text/plain" }, // Ensure plain text format
      });
      setQueries(response.data);
    } catch (error) {
      console.error("Error fetching queries:", error);
      setQueries("Failed to load queries.");
    }
  };

  const handleAssignCalls = () => {
    alert("Assign Calls Clicked");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Query Display</Text>
      <ScrollView style={styles.queryBox}>
        <Text style={styles.queryText}>{queries}</Text>
      </ScrollView>
      <Button title="Assign Calls" onPress={handleAssignCalls} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f6f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#34495e",
    textAlign: "center",
    marginBottom: 20,
  },
  queryBox: {
    width: "100%",
    maxHeight: 400,
    padding: 15,
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    marginBottom: 20,
  },
  queryText: {
    fontSize: 16,
    color: "#2c3e50",
  },
});

