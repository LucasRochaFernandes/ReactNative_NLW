import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
export function SignIn() {
  const [text, setText] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text>Daqui até a eternidade</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setText(value);
        }}
      />
      <Text>{text}</Text>
    </View>
  );
}
