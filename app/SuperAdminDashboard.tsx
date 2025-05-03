import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
  Animated,
} from "react-native";

export default function SuperAdminDashboard() {
  const [selectedOption, setSelectedOption] = useState("Welcome");
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-100)).current; // slide from left

  const toggleMenu = () => {
    const toValue = menuVisible ? -100 : 0;
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setMenuVisible(!menuVisible);
    });
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Add Engineer":
        return (
          <View style={styles.contentBox}>
            <Text style={styles.heading}>Enter Engineer Details:</Text>
            {[1, 2, 3].map((num) => (
              <View key={num} style={{ marginBottom: 15 }}>
                <Text style={styles.label}>Engineer {num}:</Text>
                <TextInput
                  placeholder={`Enter Engineer ${num} Name`}
                  style={styles.input}
                />
              </View>
            ))}
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Add Engineers</Text>
            </TouchableOpacity>
          </View>
        );
      case "Accept/Reject Assigned Queries":
        return (
          <View style={styles.contentBox}>
            <Text style={styles.heading}>Accept/Reject Queries Section</Text>
          </View>
        );
      default:
        return (
          <View style={styles.contentBox}>
            <Image
              source={require("C:/Users/ADMIN/GransApp-new/assets/images/granslogo.jpg")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.welcomeText}>WELCOME SUPER ADMIN</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {/* Left Menu Area */}
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={toggleMenu}>
            <Text style={styles.hamburger}>☰</Text>
          </TouchableOpacity>

          <Animated.View style={[styles.menuSlide, { left: slideAnim }]}>
            {["Add Engineer", "Accept/Reject Assigned Queries"].map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => {
                  setSelectedOption(option);
                  toggleMenu();
                }}
                style={[
                  styles.menuItem,
                  selectedOption === option && styles.menuItemSelected,
                ]}
              >
                <Text
                  style={[
                    styles.menuItemText,
                    selectedOption === option && styles.menuItemTextSelected,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </View>

        {/* Main Content Area */}
        <View style={styles.contentArea}>{renderContent()}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  menuWrapper: {
    width: 100,
    padding: 10,
    backgroundColor: "#e3ddfa",
  },
  hamburger: {
    fontSize: 28,
    color: "#2b0f73",
    marginBottom: 10,
    alignSelf: "center",
  },
  menuSlide: {
    position: "absolute",
    top: 50,
    width: 100,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 5,
    backgroundColor: "#e8e0ff",
  },
  menuItemSelected: {
    backgroundColor: "#cbb9f8",
    borderRadius: 6,
  },
  menuItemText: {
    fontSize: 14,
    color: "#333",
  },
  menuItemTextSelected: {
    fontWeight: "bold",
    color: "#2b0f73",
  },
  contentArea: {
    flex: 1,
    padding: 20,
  },
  contentBox: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2b0f73",
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 16,
    color: "#2b0f73",
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#2b0f73",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2b0f73",
    textAlign: "center",
  },
});
