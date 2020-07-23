import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ username, typedname, onTermSubmit }) => {
  return (
    <View>
      <View style={styles.SearbarStyle}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
          value={username}
          onChangeText={(newValue) => typedname(newValue)}
          style={styles.InputStyle}
          onEndEditing={() => onTermSubmit()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearbarStyle: {
    backgroundColor: "#ebe4e4",
    marginHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
  },
  InputStyle: { padding: "5px", flex: 1 },
});

export default SearchBar;
