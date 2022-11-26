import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

export default ({ movies, navigation }) => {
  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("MovieDetails", { movie: item })}
      >
        <View key={item.Title}>
          <Text style={styles.title}>{item.Title}</Text>
          <Image source={{ uri: item.Poster }} style={styles.slide}></Image>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.stackView}>
      <Carousel
        data={movies}
        renderItem={_renderItem}
        sliderWidth={400}
        itemWidth={350}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stackView: {
    width: "100%",

    alignItems: "center",
    padding: 20,
  },
  slide: {
    height: "85%",
    width: "100%",
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "500",
    alignSelf: "center",
  },
});
