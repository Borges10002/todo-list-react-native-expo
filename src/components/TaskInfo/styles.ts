import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  created: {
    fontSize: 16,
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  done: {
    fontSize: 16,
    color: "#8284FA",
    fontWeight: "bold",
  },

  createdWrap: {
    flexDirection: "row",
    gap: 4,
  },

  doneWrap: {
    flexDirection: "row",
    gap: 4,
  },

  info: {
    backgroundColor: "#333333",
    width: 24,
    height: 20,
    borderRadius: 5,
    marginTop: -4,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  innerInfo: {
    fontWeight: "bold",
    color: "#FFF",
  },
});
