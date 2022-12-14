import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { Heros } from "../screens/Heros";
import { SelectedMovies } from "../screens/SelectedMovies";
import { MovieDetails } from "../screens/MovieDetails";
import LinkingConfiguration from "./LinkingConfiguration";

const queryClient = new QueryClient();

export default function Navigation({ colorScheme }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Heros}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectedMovies"
        component={SelectedMovies}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
