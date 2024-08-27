import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Button, Alert } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";

type State = {
  lat: number;
  lng: number;
};

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState<State | null>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Save" onPress={savePickedLocation} />,
    });
  }, [navigation, selectedLocation]);

  const selectLocationHandler = (event: any) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat, lng });
  };

  const savePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No picked Location", "You must pick a location");
      return;
    }
    navigation.navigate("AddPlace", {
      lat: selectedLocation.lat,
      lng: selectedLocation.lng,
    });
  }, [selectedLocation, navigation]);

  return (
    <MapView
      region={{
        latitude: 31.776685,
        longitude: 35.234491,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      }}
      style={styles.container}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
