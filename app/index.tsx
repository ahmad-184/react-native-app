import "expo-dev-client";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.text_box}>
        <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  text_box: {
    width: "95%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 5,
  },
});
