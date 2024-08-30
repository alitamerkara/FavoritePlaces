import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useEffect, useState } from "react";
import { View, StyleSheet, Button, Alert, Image, Text } from "react-native";
import { GetLocation, Switchaddress } from "../utils/GetLocation";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const TakeLocation = ({ setaddress }) => {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [pickLocation, setPickLocation] = useState<{
    lat?: number;
    lng?: number;
  }>({});
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const verifyPermissions = async () => {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permission."
      );
      return false;
    }
    return true;
  };

  const showLocation = async () => {
    const permission = await verifyPermissions();
    if (!permission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const useMap = () => {
    navigation.navigate("Map");
  };

  useEffect(() => {
    const loc = async () => {
      if (route.params && isFocused) {
        const latitude = route.params.lat;
        const longitude = route.params.lng;
        setPickLocation({
          lat: latitude,
          lng: longitude,
        });
        const currentaddress = await Switchaddress(latitude, longitude);
        setaddress(currentaddress);
      }
    };
    loc();
  }, [route, isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        {pickLocation.lat && pickLocation.lng ? (
          <Image
            source={{ uri: GetLocation(pickLocation.lat, pickLocation.lng) }}
            style={styles.image}
          />
        ) : (
          <Text>No location picked yet.</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={showLocation} title="Locate User" />
        <Button onPress={useMap} title="Pick on Map" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  map: {
    width: "100%",
    height: 200,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,
    overflow: "hidden",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default TakeLocation;
