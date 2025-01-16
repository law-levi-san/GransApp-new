import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Staff() {
  const handleAssignCalls = () => {
    // Add "Assign Calls" logic here
    alert("Assign Calls Clicked");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Query Display</Text>
      {/* Display query details here */}
      <Button title="Assign Calls" onPress={handleAssignCalls} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center", // Center align content horizontally
      padding: 20,
      backgroundColor: "#f4f6f9", // Light grayish background
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: "#34495e", // Deep blue-gray for the title
      textAlign: "center",
      marginBottom: 30,
    },
    button: {
      width: "80%",
      height: 50,
      backgroundColor: "#2ecc71", // Vibrant green for the button
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      shadowColor: "#27ae60",
      shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 4 },
      elevation: 4,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
    },
  });
  