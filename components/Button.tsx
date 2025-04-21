import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
