import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default ({ children, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.header}>
        <View style={style.iconView}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            color="white"
            onPress={() => console.log("pressed")}
          />
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    backgroundColor: "black",
    width: "100%",
    height: 60,
    justifyContent: "space-between",
  },
  iconView: {
    padding: 10,
  },
});
