import React, { Component, useRef } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default (props) => {
  const { onShuffle } = props;
  const animation = useRef(null);

  return (
    <TouchableOpacity style={styles.button} onPress={onShuffle}>
      <View
        style={{
          height: 70,
          width: 80,
          marginTop: -15,
          marginHorizontal: 10,
        }}
      >
        <LottieView
          autoPlay
          ref={animation}
          source={require("../../../assets/animations/shuffeling.json")}
        />
      </View>

      <Text style={styles.shuffle}>Shuffle</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6de6e8",
    alignSelf: "center",
    flexDirection: "row",
    width: "80%",
    height: "10%",
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  shuffle: {
    fontSize: 30,
    color: "white",
  },
});
