import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { HerosList } from "./components";
import * as data from "./herosPlaceHolder.json";

export default function Heros({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Select Your Hero"} navigation={navigation}>
        <HerosList heros={data.heros} navigation={navigation} />
      </Header>
    </View>
  );
}
