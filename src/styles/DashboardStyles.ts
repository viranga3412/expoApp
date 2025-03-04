import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14002D",
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  articleContainer: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#1F0A3A",
    borderRadius: 10,
    overflow: "hidden",
  },
  articleImage: {
    width: 80,
    height: 80,
  },
  placeholderImage: {
    width: 80,
    height: 80,
    backgroundColor: "#333",
  },
  articleText: {
    flex: 1,
    padding: 10,
  },
  source: {
    color: "#BBB",
    fontSize: 12,
  },
  title: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  errorText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
