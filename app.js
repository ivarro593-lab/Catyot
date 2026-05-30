import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.logo}>🎧 Catyot</Text>

      <Text style={styles.subtitle}>
        Music & Video Player
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ابدأ الآن</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#aaa",
    fontSize: 18,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
