import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
  return (
    <LinearGradient colors={["#B47BFF", "#A0C4FF"]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
        <Text style={styles.appName}>SchedOnMe</Text>
        <Text style={styles.subtitle}>Scheduling App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.helpText}>Need Help?</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  appName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  signInButton: {
    backgroundColor: "#C084FC",
    paddingVertical: 12,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  signUpText: {
    color: "#A855F7",
    fontWeight: "bold",
  },
  helpText: {
    marginTop: 20,
    color: "#fff",
  },
});
