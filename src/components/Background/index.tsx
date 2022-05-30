import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type IProps = {
  children: ReactNode;
};

export function Background({ children }: IProps) {
  const { secondary100, secondary80 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary80]}
    >
      {children}
    </LinearGradient>
  );
}
