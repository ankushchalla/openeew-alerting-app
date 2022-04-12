import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Pressable, View } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Welcome() {

  const onPressLearnMore = () => {
    console.log("button clicked")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Feather name="x" size={20} color="black" />
      <Text style={styles.header}>Welcome!</Text>
      <View style={styles.body}>
        <Ionicons name="home-outline" size={70} color="black" />
        <Text style={styles.description}>Our app sends alerts when you're about to feel earthquake shaking.</Text>
      </View>
      <Pressable style={styles.button} onPress={onPressLearnMore}>
        <Text style={styles.text}>Get started</Text>
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
    marginBottom: 50
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
    marginTop: 10
  },
  button: {
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#393939',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    color: '#d2cfcf',
  },
});
