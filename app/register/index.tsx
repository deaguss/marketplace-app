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

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
    } else {
      fetch("http://10.0.2.2:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Registration successful") {
            Alert.alert(
              "Success",
              "Account created successfully. Please log in."
            );
            navigation.navigate("Login");
          } else {
            Alert.alert("Error", data.message || "An error occurred");
          }
        })
        .catch((error) => {
          console.error(error);
          Alert.alert("Error", "An error occurred while registering.");
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>

      <View style={styles.inputContainer}>
        <Icon
          name="person-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
        />
      </View>

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

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>Login</Text>
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
  loginContainer: {
    flexDirection: "row",
  },
  loginText: {
    color: "#777",
    fontSize: 14,
  },
  loginLink: {
    color: "#555",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default RegisterScreen;
