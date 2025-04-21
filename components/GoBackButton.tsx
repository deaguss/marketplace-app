import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const GoBackButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity style={globalStyles.goBackButton} onPress={onPress}>
    <Text style={globalStyles.goBackButtonText}>Go Back</Text>
  </TouchableOpacity>
);

export default GoBackButton;
