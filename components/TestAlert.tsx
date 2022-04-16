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
    <SafeAreaView style={styles.container}>
      <Alert visible={alertVisible} setVisible={setAlertVisible}/>
      <Feather name="x" size={20} color="black" />
      <Text style={styles.header}>Make sure you'll notice the alerts</Text>
      <View style={styles.body}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // SafeAreaView only works on IOS. 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
    // backgroundColor: '#7d7d7d'
  },
  blueButton: {
    backgroundColor: "#0f62fe",
    marginBottom: 7
  },
  header: {
    fontSize: 30,
    flex: 1,
  },
  body: {
    flex: 3,
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
