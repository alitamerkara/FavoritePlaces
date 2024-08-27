import { useState } from "react";
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";

const PlaceForm = () => {
  const [title, setTitle] = useState("");
  const changeTitle = (value: string): void => {
    setTitle(value);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={changeTitle}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 5,
  },
  input: {
    borderRadius: 5,
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "purple",
    color: "white",
    textDecorationLine: "none",
  },
});
export default PlaceForm;
