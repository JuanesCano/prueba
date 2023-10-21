import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const screenHeight = Dimensions.get("screen").height;

export default function DetailScreen({ route }) {
  const movie = route.params;
  const navigation = useNavigation();

  const uri = movie.image;

  return (
    <ScrollView>
      <View className="w-full h-[50vh]  shadow-2xl">
        <View className="flex-1 rounded-bl-3xl rounded-br-3xl overflow-hidden">
          <Animated.Image
            entering={FadeInDown.delay(200).duration(1000).springify()}
            source={{ uri }}
            className="flex-1"
          />
        </View>
      </View>

      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
        className="m-5 "
      >
        <Text className=" font-medium  p-2 rounded mb-2">
          Name: {movie.name}
        </Text>

        <Text
          className={`bg-${
            movie.status === "Alive"
              ? "green-200 text-green-800"
              : "red-100 text-red-800"
          } font-medium p-2 rounded mb-2`}
        >
          Status: {movie.status}
        </Text>

        <Text className="  font-medium  p-2 rounded mb-2">
          Species: {movie.species}
        </Text>

        <Text className="  font-medium  p-2 rounded mb-2">
          Gender: {movie.gender}
        </Text>

        <Text className="  font-medium  p-2 rounded mb-2">
          Origin: {movie.origin.name}
        </Text>
      </Animated.View>

      {/* boton para volver a homescreen */}
      <TouchableOpacity
        className="absolute mt-8 ml-1"
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" color="white" size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
