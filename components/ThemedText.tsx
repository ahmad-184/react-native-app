import { Colors } from "@/constants/colors";
import React from "react";
import { Text, TextProps, useColorScheme } from "react-native";

const ThemedText = ({ style, children, ...props }: TextProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <Text style={[{ color: theme.text }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
