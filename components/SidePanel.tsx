import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Pressable, View } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function SidePanel(props: any) {

  const onPressLearnMore = () => {
    props.navigation.navigate('TestAlert')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>OpenEEW Alerts</Text>
        <View style={styles.main}>
          <Text style={styles.link}>Settings</Text>
          <Text style={styles.link}>Latest alert</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    width: "80%",
    height: "100%",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    fontSize: 30,
  },
  main: {
    marginTop: 30
  },
  link: {
    fontSize: 25,
    marginTop: 25
  },
});
