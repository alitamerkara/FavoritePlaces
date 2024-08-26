import { Text, View, StyleSheet } from "react-native";

const AllPlaces = () => {
  return (
    <View style={styles.container}>
      <Text>There is no any place, add some!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AllPlaces;
