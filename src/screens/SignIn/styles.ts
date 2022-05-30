import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary100,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 360,
  },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: -35,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 25,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },
});
