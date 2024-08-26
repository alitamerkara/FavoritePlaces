import { View, StyleSheet } from "react-native";
import PlaceForm from "../components/PlaceForm";
import TakeImage from "../components/TakeImage";

const AddPlace = () => {
  return (
    <View style={styles.container}>
      <PlaceForm />
      <TakeImage />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
export default AddPlace;
