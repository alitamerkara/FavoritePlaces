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
  address?: string;
};

const PlaceForm = ({ navigation }) => {
  const [title, setTitle] = useState<string>("");
  const [pickPhoto, setPickPhoto] = useState<string>("");
  const [address, setaddress] = useState<string>("");
  const [datas, setDatas] = useState<datas>();
  const changeTitle = (value: string): void => {
    setTitle(value);
  };
  const handlePress = () => {
    setDatas({
      id: Math.floor(Math.random() * 9999),
      title: title,
      image: pickPhoto,
      address: address,
    });
  };
  useEffect(() => {
    if (datas) {
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
      <TakeLocation setaddress={setaddress} />
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
