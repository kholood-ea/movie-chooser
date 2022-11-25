import React, { Component, useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default (props) => {
  const {} = props;
  const [animation, setAnimation] = useState("bounceIn");

  const handleAnimation = () => {
    setAnimation("jello");
  };
  return (
    <Pressable style={style.card} onPress={() => handleAnimation()}>
      <Animatable.View animation={animation} style={style.container}>
        <Image style={style.heroImage} />
        <Text style={style.heroName}>heroName</Text>
      </Animatable.View>
    </Pressable>
  );
};
const style = StyleSheet.create({
  card: {
    width: "47%",
    height: "90%",
    marginHorizontal: 5,
    alignItems: "center",
    marginBottom: 100,
    marginTop: 5,
  },
  container: {
    width: "100%",
    height: "95%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  heroImage: {
    backgroundColor: "white",
    width: "100%",
    height: "80%",
  },
  heroName: {
    fontSize: 20,
    color: "white",
  },
});
