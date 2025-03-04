import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Roboto",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    fontSize: 16,
    fontFamily: "Roboto",
    paddingVertical: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 150,
  },
});

export default styles;
