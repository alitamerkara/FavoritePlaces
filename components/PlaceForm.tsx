import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from "react-native";
import TakeImage from "./TakeImage";
import TakeLocation from "./TakeLocation";

type datas = {
  id?: number;
  title?: string;
  image?: string;
  adress?: string;
};

const PlaceForm = ({ navigation }) => {
  const [title, setTitle] = useState<string>("");
  const [pickPhoto, setPickPhoto] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [datas, setDatas] = useState<datas[]>([]);
  const changeTitle = (value: string): void => {
    setTitle(value);
  };
  const handlePress = () => {
    setDatas([
      ...datas,
      {
        number: Math.floor(Math.random() * 9999),
        title: title,
        image: pickPhoto,
        adress: adress,
      },
    ]);
  };
  useEffect(() => {
    if (datas.length > 0) {
      navigation.navigate("AllPlaces", {
        datas: datas,
      });
    }
  }, [datas]);
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
      <TakeImage setPickPhoto={setPickPhoto} />
      <TakeLocation setAdress={setAdress} />
      <Button onPress={handlePress} title="Add Place" />
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
