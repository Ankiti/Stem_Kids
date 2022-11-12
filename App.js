import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

ScreenOrientation.lockAsync(5);

export default function App() {
  const [changeColor1, setChangeColor1] = useState(false);
  const handlePress1 = () => {
    setChangeColor1(!changeColor1);
  };
  const [changeColor2, setChangeColor2] = useState(false);
  const handlePress2 = () => {
    setChangeColor2(!changeColor2);
  };

  const [maxineAsleep, setMaxineAwake] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}> AND GATE </Text>
      <View style={styles.boxSimple}>
        <Image
          style={styles.image}
          source={require("./assets/and-gate-fococlipping-standard.png")}
        />

        <TouchableOpacity
          style={changeColor1 == true ? styles.button1_pressed : styles.button1}
          onPress={handlePress1}
        />
        <TouchableOpacity
          style={changeColor2 == true ? styles.button2_pressed : styles.button2}
          onPress={handlePress2}
        />

        <TouchableOpacity>
          <Image
            source={
              changeColor1 == true && changeColor2 == true
                ? require("./assets/maxine_awake.png")
                : require("./assets/maxine_asleep.png")
            }
            style={styles.maxine}
          />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0AAD1",
    alignItems: "center",
  },
  h1: {
    paddingTop: 10,
    fontSize: 50,
  },
  image: {
    marginTop: 67,
    marginHorizontal: 150,
    height: 150,
  },

  button1_pressed: {
    backgroundColor: "#559980",
    width: 75,
    height: 75,
    marginHorizontal: 60,
    marginTop: -147,
    margin: 2,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 5,
  },
  button1: {
    backgroundColor: "#D0AAD1",
    width: 75,
    height: 75,
    marginHorizontal: 60,
    marginTop: -147,
    margin: 2,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 5,
  },

  button2: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: "#D0AAD1",
    marginHorizontal: 60,
    margin: 2,
    borderColor: "black",
    borderWidth: 5,
  },
  button2_pressed: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: "#559980",
    marginHorizontal: 60,
    margin: 2,
    borderColor: "black",
    borderWidth: 5,
  },

  boxSimple: {
    backgroundColor: "#ffe4e1",
    borderRadius: 40,
    width: 600,
    height: 275,
    margin: 10,
  },

  maxine: {
    height: 75,
    width: 75,
    borderRadius: 100,
    borderWidth: 1,
    marginTop: -122,
    marginHorizontal: 410,
  },
});
