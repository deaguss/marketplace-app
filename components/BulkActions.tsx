import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const BulkActions = ({ handleBulkOrder, handleBulkRemove }: any) => (
  <View style={styles.actionButtons}>
    <TouchableOpacity
      style={[styles.bulkActionButton, styles.checkoutButton]}
      onPress={handleBulkOrder}
    >
      <Text style={styles.bulkActionButtonText}>Checkout All</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.bulkActionButton, styles.removeButton]}
      onPress={handleBulkRemove}
    >
      <Text style={styles.bulkActionButtonText}>Remove Selected</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  bulkActionButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  checkoutButton: {
    backgroundColor: "#3B82F6",
  },
  removeButton: {
    backgroundColor: "#EF4444",
  },
  bulkActionButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 15,
  },
});

export default BulkActions;
