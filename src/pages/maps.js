import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";


const position = { latitude: -24.5872, longitude: -48.5947 };
const position2 = { latitude: -22.1267, longitude: -47.6637 };
const position3 = { latitude: -22.6333, longitude: -47.0564 };
const position4 = { latitude: -23.7787, longitude: -45.3584 };

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={position} title="Iporanga" description="Petar" />
        <Marker coordinate={position2} title="Analandia" />
        <Marker coordinate={position3} title="Holambra" />
        <Marker coordinate={position4} title="Ilhabela" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
