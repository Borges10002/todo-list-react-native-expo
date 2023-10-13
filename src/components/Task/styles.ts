import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerTask: {
    backgroundColor: "#333333",
    borderRadius: 5,
    paddingLeft: 9,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerText: {
    maxWidth: 250,
    color: "#F2F2F2",
    // flexWrap: 'wrap',
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  removeTask: {},
});
