import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";
import BASE_URL from "../.expo/src/config";

export default function Staff() {
  const [queries, setQueries] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/displayquerystaff`, {
        headers: { "Content-Type": "text/plain" },
      });
      setQueries(response.data);
    } catch (error: any) {
      console.error("Error fetching queries:", error);

      if (error.response && Array.isArray(error.response.data)) {
        setQueries(error.response.data);
      } else {
        console.error("Expected an array but got:", error.response?.data);
        setQueries([]);
      }
    }
  };

  const handleAssignCalls = (queryId: string) => {
    router.push({
      pathname: "/ScheduleEngineer",
      params: { queryId },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Query Display</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {queries.map((query, index) => (
          <View key={index} style={styles.queryCard}>
            <Text style={styles.queryLabel}>
              Query ID:
              <Text style={styles.queryText}> {query.id || "N/A"}</Text>
            </Text>

            <Text style={styles.queryLabel}>
              Problem Statement:
              <Text style={styles.queryText}>
                {query.problem_statement || "Unknown"}
              </Text>
            </Text>

            <Text style={styles.queryLabel}>Problem Description:</Text>
            <Text style={styles.queryText}>
              {query.problem_description || "No issue description"}
            </Text>

            <Text style={styles.queryLabel}>
              Name:
              <Text style={styles.queryText}>
                {query.name || "No issue description"}
              </Text>
            </Text>

            <Text style={styles.queryLabel}>
              Phone number:
              <Text style={styles.queryText}>
                {query.phone_number || "No issue description"}
              </Text>
            </Text>

            <Text style={styles.queryLabel}>
              Company Name:
              <Text style={styles.queryText}>
                {query.company_name || "No issue description"}
              </Text>
            </Text>

            <Text style={styles.queryLabel}>
              Email:
              <Text style={styles.queryText}>
                {query.email || "No issue description"}
              </Text>
            </Text>

            {query.has_assigned_call ? (
              <TouchableOpacity
                style={[styles.assignButton, { backgroundColor: "#2ecc71" }]} // green
                onPress={() =>
                  router.push({
                    pathname: "/AssignedCallView",
                    params: { queryId: query.id },
                  })
                }
              >
                <Text style={styles.buttonText}>View Assigned Call</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.assignButton}
                onPress={() => handleAssignCalls(query.id)}
              >
                <Text style={styles.buttonText}>Assign Call</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollView: {
    paddingBottom: 30,
  },
  queryCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  queryLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7f8c8d",
  },
  queryText: {
    fontSize: 16,
    color: "#34495e",
    marginBottom: 10,
  },
  assignButton: {
    marginTop: 10,
    backgroundColor: "#5dade2",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
