import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 32,
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#2C5F30",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  switchContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
  calendarButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
  },
  calendarButtonText: {
    color: "#FFF",
  },
  switchLabel: {
    marginVertical: 5,
    fontWeight: "bold",
  },
});
