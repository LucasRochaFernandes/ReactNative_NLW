import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

interface IProps {
  titleIcon: string;
}

export function ButtonIcon({ titleIcon }: IProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} />
      </View>
      <Text style={styles.title}>Entre com seu Discord</Text>
    </TouchableOpacity>
  );
}
