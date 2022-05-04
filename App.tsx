import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Pressable, View, Button } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./components/Welcome";
import TestAlert from "./components/TestAlert";
import SidePanel from "./components/SidePanel";
import Settings from "./components/Settings";

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen 
    //       name="Home" 
    //       component={Welcome}
    //       // Getting rid of the default header
    //       options={{
    //         header: (props) => undefined
    //       }}
    //     />
    //     <Stack.Screen 
    //       name="TestAlert" 
    //       component={TestAlert} 
    //       options={{
    //         header: (props) => undefined
    //       }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Settings />
  );
}

export default App;


