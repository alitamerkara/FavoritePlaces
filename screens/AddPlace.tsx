import { View, StyleSheet, Button } from "react-native";
import PlaceForm from "../components/PlaceForm";
import TakeImage from "../components/TakeImage";
import TakeLocation from "../components/TakeLocation";

const AddPlace = () => {
  return (
    <View style={styles.container}>
      <PlaceForm />
      <TakeImage />
      <TakeLocation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
export default AddPlace;
