import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Character({ character }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailScreen", character)}
    >
      <Image
        source={{ uri: character.image }}
        className="rounded-2xl w-[150] h-[150] m-3"
        // style={{ width: 180, height: 180 }}
      />
    </TouchableOpacity>
  );
}
