import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileInfo = ({ user }: any) => (
  <View style={styles.profileContainer}>
    <Image source={user.profileImage} style={styles.profileImage} />
    <Text style={styles.name}>{user.name}</Text>
    <Text style={styles.email}>{user.email}</Text>
  </View>
);

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#777",
  },
});

export default ProfileInfo;
