import React from "react";
import { TextInput } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (text: string) => void;
}) => {
  return (
    <TextInput
      style={globalStyles.searchInput}
      placeholder="Search products..."
      value={searchTerm}
      onChangeText={setSearchTerm}
    />
  );
};

export default SearchBar;
