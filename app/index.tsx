import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/Choice"); // Navigate to login screen
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/granslogo.jpg")}
        style={styles.logo}
      />
      <Text style={styles.text}>GRANS INFOTECH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d135e",
  },
  logo: {
    width: 150,
    height:150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
