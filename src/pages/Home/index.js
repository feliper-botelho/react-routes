import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

// import { Container } from './styles';

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => Actions.jump("about")}>
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  );
}
