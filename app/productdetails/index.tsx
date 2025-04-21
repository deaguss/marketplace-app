import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  View,
  Text,
  Button,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { useCart } from "@/context/CartContext";
import ProductDetails from "../../components/ProductDetails";
import AddToCartButton from "../../components/AddToCartButton";
import GoBackButton from "../../components/GoBackButton";
import { useProductContext } from "@/context/ProductContext";

const ProductDetailScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { addToCart } = useCart();
  const { productId } = route.params;
  const { products, fetchProducts, editProduct, deleteProduct } =
    useProductContext();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Product Not Found</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    Alert.alert(
      "Added to Cart",
      `${product.name} has been added to your cart.`
    );
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleEditProduct = () => {
    setIsModalVisible(true);
  };

  const handleSaveEdit = async () => {
    await editProduct(editedProduct);
    setIsModalVisible(false);
    Alert.alert("Product Edited", `${editedProduct.name} has been updated.`);
  };

  const handleDeleteProduct = () => {
    Alert.alert(
      "Confirm Deletion",
      `Are you sure you want to delete ${product.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            await deleteProduct(product.id);
            navigation.goBack();
            Alert.alert("Deleted", `${product.name} has been deleted.`);
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <ProductDetails product={product} />
        <AddToCartButton onPress={handleAddToCart} />
        <GoBackButton onPress={() => navigation.goBack()} />
        <TouchableOpacity style={styles.editButton} onPress={handleEditProduct}>
          <Text style={styles.buttonText}>Edit Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteProduct}
        >
          <Text style={styles.buttonText}>Delete Product</Text>
        </TouchableOpacity>
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Product</Text>
              <TextInput
                style={styles.input}
                value={editedProduct.name}
                onChangeText={(text) =>
                  setEditedProduct((prev) => ({ ...prev, name: text }))
                }
                placeholder="Product Name"
              />
              <TextInput
                style={styles.input}
                value={editedProduct.price.toString()}
                onChangeText={(text) => {
                  const parsedPrice = parseFloat(text);
                  if (!isNaN(parsedPrice)) {
                    setEditedProduct((prev) => ({
                      ...prev,
                      price: parsedPrice,
                    }));
                  } else {
                    setEditedProduct((prev) => ({
                      ...prev,
                      price: 0,
                    }));
                  }
                }}
                placeholder="Product Price"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                value={editedProduct.description}
                onChangeText={(text) =>
                  setEditedProduct((prev) => ({ ...prev, description: text }))
                }
                placeholder="Product Description"
              />
              <TextInput
                style={styles.input}
                value={editedProduct.category}
                onChangeText={(text) =>
                  setEditedProduct((prev) => ({ ...prev, category: text }))
                }
                placeholder="Product Category"
              />
              <TextInput
                style={styles.input}
                value={editedProduct.color}
                onChangeText={(text) =>
                  setEditedProduct((prev) => ({ ...prev, color: text }))
                }
                placeholder="Product Color"
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSaveEdit}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  editButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 20,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
});

export default ProductDetailScreen;
