import React, { useState } from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";
import { styles } from "./styles";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  const [text, setText] = useState<string>("");

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{"\n"}e Organize suas{`\n`}
          jogatinas {`\n`}
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar {`\n`}
          seus games favoritos {`\n`}
          com seus amigos
        </Text>
        <ButtonIcon titleIcon={`Entrar com discord`} />
      </View>
    </View>
  );
}
