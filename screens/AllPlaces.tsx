import { useIsFocused, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import PlacesList from "../components/PlacesList";

type datas = {
  id: number;
  title?: string;
  image?: string;
  adress?: string;
};

const AllPlaces = () => {
  const [currentData, setCurrentData] = useState<datas[]>([]);
  const route = useRoute();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setCurrentData(route.params.datas);
    }
  }, [isFocused, route]);
  let output;
  if (currentData.length > 0) {
    output = <PlacesList currentData={currentData} />;
  } else {
    output = (
      <View style={styles.container}>
        <Text>There is no any place, add some!</Text>
      </View>
    );
  }
  console.log(currentData);
  return output;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AllPlaces;
