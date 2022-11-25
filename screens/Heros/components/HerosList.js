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

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        style={{ backgroundColor: "#2f95dc" }}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={() => <HeroCard />}
        keyExtractor={(item) => item}
      />
    </View>
  );
};
