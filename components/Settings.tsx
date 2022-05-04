import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Pressable, View } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Settings(props: any) {

  const onPressLearnMore = () => {
    props.navigation.navigate('TestAlert')
  }

  const onPressExit = () => {
    props.navigation.popToTop()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather name="x" size={20} color="black" onPress={onPressExit} />
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.main}>
        <View>
          <Text style={styles.linkTitle}>Privacy</Text>
          <Text style={styles.linkText}>Manage the data you share with us</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="black" style={styles.chevron} />
      </View>
      <Text style={styles.signOut}>
        Sign out
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  body: {
    width: "80%",
    height: "100%",
  },
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: "100%",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingBottom: "15%"
  },
  headerText: {
    fontSize: 30,
    marginTop: 5
  },
  main: {
    marginTop: 50,
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  linkTitle: {
    fontSize: 20
  },
  linkText: {
    fontSize: 15,
    color: "#848484"
  },
  chevron: {
    alignSelf: "center"
  },
  signOut: {
    marginTop: 30,
    color: "#d94444",
    fontSize: 20,
    paddingLeft: 20
  }
});
