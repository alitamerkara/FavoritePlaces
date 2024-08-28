import { View, StyleSheet, Button } from "react-native";
import PlaceForm from "../components/PlaceForm";

const AddPlace = ({ navigation }) => {
  return (
    <View>
      <PlaceForm navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default AddPlace;
