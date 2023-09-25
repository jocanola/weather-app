import { StyleSheet } from "react-native";

export const weatherStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    // backgroundColor: "#607df2",
  },
  heading: {
    fontSize: 18,
    padding: 8,
    color: "#121619",
    fontWeight: "600",
  },
  searchForm: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#607df2",
    borderRadius: 4,
    overflow: "hidden",
    margin: 16,
  },
  input: {
    flex: 4,
    padding: 8,
  },
  button: {
    flex: 1,
    padding: 8,
    backgroundColor: "#607df2",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    alignItems: "center",
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "600",
  },
  date: {
    marginTop: 8,
    marginBottom: 16,
    color: "#808080",
  },
  location: {
    fontSize: 14,
    color: "#808080",
    textAlign: "center",
  },
  forecastInfo: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  forecastIcon: {
    fontSize: 24,
    marginBottom: 16,
  },
  forecastValue: {
    alignItems: "center",
  },
  degrees: {
    fontSize: 34,
  },
  degreesCount: {
    position: "relative",
    padding: 16,
  },
  circle: {
    position: "absolute",
    height: 16,
    width: 16,
    borderColor: "#121619",
    borderWidth: 1,
    borderRadius: 8,
    top: 0,
    right: 0,
  },
  weatherCondition: {
    fontSize: 32,
    color: "#607df2",
  },
  listItem: {
    margin: 16,
    fontSize: 18,
    color: "#121619",
  },
  helperText: {
    justifyContent: "center",
    marginBottom: 20,
    fontSize: 14,
    color: "#808080",
  },
});
