import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../../components/SearchBar";

const SearchScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <SearchBar
        username={name}
        typedname={(newValue) => setName(newValue)}
        onTermSubmit={() => console.log("Term Submitted")}
      />
      <Text>Hello From Search Screen</Text>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
