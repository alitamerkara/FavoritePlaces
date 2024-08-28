import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  ImagePickerResult,
  ImagePickerSuccessResult,
} from "expo-image-picker";
import React, { useState } from "react";
import { View, Button, Alert, Image, StyleSheet, Text } from "react-native";

const TakeImage = ({ setPickPhoto }) => {
  const [pickedImage, setPickedImage] = useState<string | null>("");

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInformation?.status == PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status == PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permission."
      );
      return false;
    }
    return true;
  };
  const takePhoto = async () => {
    const permission = await verifyPermissions();
    if (!permission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
    setPickPhoto(image.assets[0].uri);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.image} />
        ) : (
          <Text style={{ color: "white" }}>There is no any picture yet</Text>
        )}
      </View>
      <Button title="Take Image" onPress={takePhoto} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
export default TakeImage;
