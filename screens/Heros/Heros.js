import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { HerosList } from "./components";
export default function Heros({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HerosList />
      </Header>
    </View>
  );
}
