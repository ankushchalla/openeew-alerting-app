import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Pressable, View } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import Alert from "./Alert";

export default function TestAlert() {
  const [alertVisible, setAlertVisible] = useState(false)

  const onPressLearnMore = () => {
    console.log("button clicked")
  }

  const onPressTestAlert = () => {
    setAlertVisible(true)
  }

  return (
    <View style={[styles.container, {
      backgroundColor: alertVisible ? "#afafaf" : "#fff"
    }]}>
      <View style={styles.body}>
        <Alert visible={alertVisible} setVisible={setAlertVisible} />
        <Feather name="x" size={20} color="black" />
        <Text style={styles.header}>Make sure you'll notice the alerts</Text>
        <View style={styles.main}>
          <MaterialCommunityIcons name="cellphone-wireless" size={70} color="black" />
          <Text style={styles.description}>Check that your phone's audio and vibration is on
            so that alerts will reach you.</Text>
        </View>
        <Pressable style={[styles.button, styles.blueButton]} onPress={onPressTestAlert}>
          <Text style={styles.buttonText}>Send me a test alert</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onPressLearnMore}>
          <Text style={styles.buttonText}>Get started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingTop: StatusBar.currentHeight,
    width: "93%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  main: {
    height: "70%",
    paddingTop: "20%"
  },
  blueButton: {
    backgroundColor: "#0f62fe",
    marginBottom: 7
  },
  header: {
    fontSize: 30,
  },
  description: {
    fontSize: 17,
    marginTop: 10,
    color: 'black',
  },
  button: {
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#393939',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    color: '#d2cfcf',
  },
});
