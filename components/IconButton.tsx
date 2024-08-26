import { Pressable, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

type props = {
  size: number;
  color: string | undefined;
  onPress: React.FC;
};

const IconButton = ({ size, color, onPress }: props) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]}
      onPress={onPress}
    >
      <Entypo name="plus" size={size} color={color} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    margin: 4,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
export default IconButton;
