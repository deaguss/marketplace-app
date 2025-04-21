import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SettingsOption = ({ icon, label, onPress }: any) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    {icon}
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 15,
  },
});

export default SettingsOption;
