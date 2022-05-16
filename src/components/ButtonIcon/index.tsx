import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

export function ButtonIcon() {
  return (
    <TouchableOpacity>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}></Text>
    </TouchableOpacity>
  );
}
