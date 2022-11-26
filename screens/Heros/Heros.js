import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { HerosList } from "./components";
import Handler from "./Handler";
export default function Heros({ navigation }) {
  const { data } = Handler();
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Select Your Hero"} navigation={navigation}>
        <HerosList heros={data.heros} navigation={navigation} />
      </Header>
    </View>
  );
}
