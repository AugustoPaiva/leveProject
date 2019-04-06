import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../../styles";

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth * 0.9,
    height: metrics.screenHeight * 0.13,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: metrics.screenHeight * 0.01
  },
  image: {
    resizeMode: "contain",
    height: metrics.screenWidth * 0.2,
    width: metrics.screenWidth * 0.2,

    borderRadius: 100,
    marginLeft: metrics.screenWidth * 0.03,
    marginRight: metrics.screenWidth * 0.03
  },
  information: {
    flexDirection: "column"
  }
});

export default styles;
