import { useIsFocused, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import PlacesList from "../components/PlacesList";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Datas = {
  id?: number;
  title?: string;
  image?: string;
  address?: string;
};

const AllPlaces = () => {
  const [currentData, setCurrentData] = useState<Datas[]>([]);
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    const getting = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("photos");
        if (jsonValue) {
          setCurrentData(JSON.parse(jsonValue));
          console.log("data shown");
        }
      } catch (error) {
        console.error("Error getting data from AsyncStorage:", error);
      }
    };

    if (isFocused) {
      getting();
    }
  }, [isFocused]);

  useEffect(() => {
    const setting = async () => {
      try {
        if (currentData.length > 0) {
          await AsyncStorage.setItem("photos", JSON.stringify(currentData));
          console.log("data settled");
        }
      } catch (error) {
        console.error("Error setting data to AsyncStorage:", error);
      }
    };

    setting();
  }, [currentData]);
  useEffect(() => {
    if (isFocused && route.params?.datas) {
      const newPlace = route.params.datas as Datas;
      if (!currentData.some((data) => data.id === newPlace.id)) {
        setCurrentData((prevData) => [...prevData, newPlace]);
      }
    }
  }, [isFocused, route.params?.datas, currentData]);

  const output =
    currentData.length > 0 ? (
      <PlacesList currentData={currentData} />
    ) : (
      <View style={styles.container}>
        <Text>There is no any place, add some!</Text>
      </View>
    );

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
