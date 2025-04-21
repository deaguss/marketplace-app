import { useUserContext } from "@/context/UserContext";
import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const { login } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both email and password.");
    } else {
      fetch("http://10.0.2.2:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (data.message === "Login successful") {
            const userData = {
              id: data.data.id,
              username: data.data.username,
              email: data.data.email,
            };

            await AsyncStorage.setItem("user", JSON.stringify(userData));

            login(userData);

            navigation.navigate("Home");
          } else {
            Alert.alert("Error", data.message || "An error occurred");
          }
        })
        .catch((error) => {
          console.error(error);
          Alert.alert("Error", "An error occurred while logging in.");
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon
          name="lock-closed-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() =>
          Alert.alert("Forgot Password", "Password recovery not implemented.")
        }
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 15,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#555",
    fontSize: 14,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
  },
  registerText: {
    color: "#777",
    fontSize: 14,
  },
  registerLink: {
    color: "#555",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default LoginScreen;
