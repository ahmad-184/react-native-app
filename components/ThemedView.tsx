import { Colors } from "@/constants/colors";
import React from "react";
import { useColorScheme, View, type ViewProps } from "react-native";

const ThemedView = ({ style, children, ...props }: ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;
