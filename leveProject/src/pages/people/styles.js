import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center"
  },
  filter: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: metrics.screenWidth * 0.9,
    marginTop: metrics.screenHeight * 0.01,
    marginBottom: metrics.screenHeight * 0.01
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0
  },
  profilepic: {
    width: metrics.screenHeight * 0.1,
    height: metrics.screenHeight * 0.1
  },
  button: {
    width: metrics.screenWidth * 0.9,
    height: metrics.screenHeight * 0.03,
    alignItems: "center",
    marginBottom: metrics.screenHeight * 0.01,
    backgroundColor: colors.primary
  },
  buttonText: {
    color: colors.white
  }
});

export default styles;
