import ReactLogo from "@/assets/images/react-logo.png";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import "expo-dev-client";
import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.text_box}>
        <Image source={ReactLogo} alt="react logo" />
        <ThemedText style={styles.text}>
          Edit app/index.tsx to edit this screen.
        </ThemedText>
        <Link href={"/about"}>
          <ThemedText style={styles.about_link}>Go To About Page</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    fontFamily: "SpaceMono",
  },
  text_box: {
    width: "95%",
    paddingHorizontal: 5,
    paddingVertical: 20,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "inherit",
    borderRadius: 5,
  },
  about_link: {
    color: "skyblue",
  },
});
