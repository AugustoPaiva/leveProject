import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  profilePic: {
    height: metrics.screenHeight * 0.17,
    width: metrics.screenHeight * 0.17,
    borderRadius: 100,
    marginTop: metrics.screenHeight * 0.02,
    marginBottom: metrics.screenHeight * 0.02
  },
  textInput: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: metrics.screenWidth * 0.9,
    marginTop: metrics.screenHeight * 0.01
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    width: metrics.screenWidth * 0.4
  }
});

export default styles;
