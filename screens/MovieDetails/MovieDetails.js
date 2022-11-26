import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Header } from "../../components/Header";

export default function MovieDetails({ navigation, route }) {
  const { movie } = route.params;
  const movieInfo = (title, info) => (
    <View style={styles.infoView}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );

  return (
    <Header Back title={"Movie Details"} navigation={navigation}>
      <Image style={styles.poster} source={{ uri: movie.Poster }} />
      {movieInfo("Title", movie?.Title)}
      {movieInfo("Publish Year", movie?.Year)}
      {movieInfo("Type", movie?.Type)}
      {movieInfo("ID", movie?.imdbID)}
    </Header>
  );
}

const styles = StyleSheet.create({
  poster: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  infoView: {
    marginBottom: 20,
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  info: {
    fontSize: 20,
  },
});
