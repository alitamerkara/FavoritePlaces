import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const PlaceItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Text style={styles.text}>{item.address}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 130,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "purple",
    flexDirection: "row",
    overflow: "hidden",
  },
  textContainer: {
    width: 200,
    padding: 10,
    gap: 5,
  },
  textTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: "#cecece",
  },
  text: {
    fontSize: 14,
    color: "#cecece",
  },
  image: {
    height: 130,
    width: 150,
  },
});
export default PlaceItem;
