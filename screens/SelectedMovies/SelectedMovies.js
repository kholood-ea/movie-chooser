import React, { Component, useRef } from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { SelectedMovieList, ShuffleButton } from "./components";
import LottieView from "lottie-react-native";

import Handler from "./Handler";
export default function SelectedMovies({ navigation, route }) {
  const { shuffeling, movies, shuffle } = Handler({ route });
  const animation = useRef(null);

  return (
    <>
      <Header
        navigation={navigation}
        Back
        title={"Movie For You"}
        onBackPress={() => {
          navigation.pop();
        }}
      >
        {shuffeling && (
          <LottieView
            autoPlay
            ref={animation}
            style={{
              marginTop: 40,
              width: 225,
              height: 225,
            }}
            source={
              require("../../assets/animations/moviesWheel.json") //lottiefiles.com/featured
            }
          />
        )}
        {!shuffeling && (
          <SelectedMovieList movies={movies} navigation={navigation} />
        )}
      </Header>
      <ShuffleButton onShuffle={() => shuffle(movies)} />
    </>
  );
}
