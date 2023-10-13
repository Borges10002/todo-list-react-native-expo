import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {},
  body: {
    flex: 1,
    backgroundColor: "#262626",
    paddingRight: 26,
    paddingLeft: 26,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -25,
    marginBottom: 42,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#333333",
    height: 56,
    borderRadius: 5,
    color: "#fff",
    fontSize: 19,
    padding: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 26,
    color: "#fff",
  },

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

  line: {
    width: "100%",
    backgroundColor: "#333333",
    height: 1.5,
    marginBottom: 25,
  },

  noTask: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },

  noTaskTextBold: {
    color: "#808080",
    marginTop: 10,
    fontWeight: "bold",
  },
  noTaskText: {
    color: "#808080",
  },
});
