import React, { Component, useState } from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as DATA from "../herosPlaceHolder.json";
import { HeroCard } from "../../../components/Heros";

export default (props) => {
  const { heros, navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        style={{ backgroundColor: "#2f95dc" }}
        data={heros}
        renderItem={(hero) => (
          <HeroCard
            hero={hero.item}
            onHeroPress={() =>
              navigation.navigate("SelectedMovies", { hero: hero.item })
            }
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
