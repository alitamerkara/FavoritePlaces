import { View, StyleSheet } from "react-native";
import PlaceForm from "../components/PlaceForm";

const AddPlace = () => {
  return (
    <View style={styles.container}>
      <PlaceForm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AddPlace;
