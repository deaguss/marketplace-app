import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  color?: string;
  image: any;
  category: string;
}

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  fetchProducts: () => void;
  editProduct: (updatedProduct: Product) => void;
  deleteProduct: (productId: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3000/api/products");
      const data = await response.json();

      console.log(data.data);
      if (response.ok) {
        setProducts(data.data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const editProduct = async (updatedProduct: Product) => {
    try {
      const response = await fetch(
        `http://10.0.2.2:3000/api/products/${updatedProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      console.log("Product updated:", updatedProduct);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const deleteProduct = async (productId: number) => {
    try {
      const response = await fetch(
        `http://10.0.2.2:3000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
      console.log("Product deleted:", productId);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        fetchProducts,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
