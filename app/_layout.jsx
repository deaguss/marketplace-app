import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import ProductDetailScreen from "./productdetails";
import CartScreen from "./cart";
import HomeScreen from "./home";
import LoginScreen from "./login";
import Settings from "./setting";

import { CartProvider } from "../context/CartContext";
import { UserProvider } from "@/context/UserContext";
import RegisterScreen from "./register";
import { ProductProvider } from "@/context/ProductContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeList"
        component={HomeScreen}
        options={{
          title: "Market Place",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreen}
        options={{
          title: "Product Details",
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "#4CAF50",
            }}
          >
            <Tab.Screen
              name="Home"
              component={ProductsStackNavigator}
              options={{
                tabBarIcon: () => <FontAwesome5 name="box" size={24} />,
              }}
            />
            <Tab.Screen
              name="Cart"
              component={CartScreen}
              options={{
                tabBarIcon: () => (
                  <FontAwesome5 name="shopping-cart" size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarIcon: () => <FontAwesome5 name="cog" size={24} />,
              }}
            />
            <Tab.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                tabBarIcon: () => <FontAwesome5 name="sign-in-alt" size={24} />,
              }}
            />
            <Tab.Screen
              name="Login"
              component={LoginScreen}
              options={{
                tabBarIcon: () => <FontAwesome5 name="sign-in-alt" size={24} />,
              }}
            />
          </Tab.Navigator>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
};

export default App;
