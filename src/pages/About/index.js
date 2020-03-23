import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

// import { Container } from './styles';

export default function About() {
  return (
    <View>
      <Text>About</Text>
      <TouchableOpacity onPress={() => Actions.jump("home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
