import { View, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import Character from "../components/Character";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const { isLoading, characters, getCharacters } = useCharacter();

  return (
    <View className="flex items-center" style={{ marginTop: top }}>
      <FlatList
        data={characters}
        renderItem={({ item }) => <Character character={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // ** scrill infinito, para manejar la paginacion de la api
        onEndReached={getCharacters}
        onEndReachedThreshold={0.2}
        ListFooterComponent={
          isLoading ? (
            <ActivityIndicator style={{ height: 100 }} color="grey" />
          ) : null
        }
      />
    </View>
  );
}
