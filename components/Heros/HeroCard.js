import React, { useState } from "react";
import { Text, Image, StyleSheet, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";

export default (props) => {
  const { hero, onHeroPress } = props;
  const [animation, setAnimation] = useState("bounceIn");

  const handleAnimation = () => {
    setAnimation("jello");
    setTimeout(() => {
      onHeroPress();
    }, 500);
  };

  return (
    <Pressable style={style.card} onPress={() => handleAnimation()}>
      <Animatable.View animation={animation} style={style.container}>
        <Image source={{ uri: hero.image }} style={style.heroImage} />
        <Text style={style.heroName}>{hero.name}</Text>
      </Animatable.View>
    </Pressable>
  );
};
const style = StyleSheet.create({
  card: {
    flex: 1,

    alignItems: "center",
    marginVertical: 3,
  },
  container: {
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
