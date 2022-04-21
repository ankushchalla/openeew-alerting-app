import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Pressable, View, Button } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./components/Welcome";
import TestAlert from "./components/TestAlert";

function HomeScreen(props: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Welcome}
          // Getting rid of the default header
          options={{
            header: (props) => undefined
          }}
        />
        <Stack.Screen 
          name="TestAlert" 
          component={TestAlert} 
          options={{
            header: (props) => undefined
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


