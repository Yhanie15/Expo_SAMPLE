import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function SignInScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <LinearGradient colors={["#B47BFF", "#A0C4FF"]} style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View>
      <Text style={styles.headerText}>Sign In</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.helpText}>Need Help?</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordInput: {
    flex: 1,
  },
  forgotPassword: {
    color: "white",
    marginTop: 10,
  },
  signInButton: {
    backgroundColor: "#C084FC",
    paddingVertical: 12,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  signInText: {
    color: "white",
    fontWeight: "bold",
  },
  helpText: {
    marginTop: 20,
    color: "white",
  },
});
