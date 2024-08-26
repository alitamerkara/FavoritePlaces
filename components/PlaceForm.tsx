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
    padding: 20,
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
});
export default PlaceForm;
