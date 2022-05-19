import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
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
    color: theme.color.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.color.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 60,
  },
});
