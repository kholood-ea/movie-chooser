import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default ({ children, title, Back, navigation, customBackPress }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.header}>
        <View style={style.iconView}>
          {Back && (
            <Ionicons
              name="chevron-back-sharp"
              size={30}
              color="white"
              onPress={() =>
                customBackPress ? customBackPress() : navigation.pop()
              }
            />
          )}
        </View>

        <View style={style.titleView}>
          <Text style={style.title}>{title}</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconView: {
    alignSelf: "center",
  },
  titleView: {
    flexDirection: "row",
    alignSelf: "center",
    width: "70%",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
  },
});
