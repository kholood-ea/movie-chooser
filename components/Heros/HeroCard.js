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
    flex: 1,
    // width: "50%",
    // height: 150,
    alignItems: "center",
    marginVertical: 3,
  },
  container: {
    // width: "100%",
    // height: "95%",
    // justifyContent: "space-around",
    alignItems: "center",
  },
  heroImage: {
    backgroundColor: "white",
    width: 180,
    height: 200,
    marginVertical: 3,
  },
  heroName: {
    fontSize: 20,
    color: "white",
  },
});
