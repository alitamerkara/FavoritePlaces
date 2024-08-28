import { FlatList, Text } from "react-native";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ currentData }) => {
  return (
    <FlatList
      data={currentData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem item={item} />}
    />
  );
};

export default PlacesList;
