import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Pressable, View } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";

interface AlertProps {
    visible: boolean,
    setVisible(visible: boolean): void 
}
export default function Alert(props: AlertProps) {

    if(!props.visible) return null

    const onPressExit = () => {
        props.setVisible(false)
    }
    
    return (
        <View style={styles.alertContainer}>
        <View style={styles.alertHeaderContainer}>
          <Feather name="alert-triangle" size={22} color="#d2cfcf" style={styles.alertEmergencyIcon} />
          <Text style={styles.alertHeaderText}>EMERGENCY ALERT</Text>
          <Feather name="x" size={20} color="black" style={styles.alertExitIcon} onPress={onPressExit} />
        </View>
        <View style={styles.alertBody}>
          <View style={styles.alertDescriptionContainer}>
            <Text style={styles.alertDescriptionText}>TEST Earthquake Alert!</Text>
            <Text style={styles.earthquakeTime}>10:00am - Get ready for shaking.</Text>
          </View>
          <View style={styles.alertStats}>
            <Text style={styles.shakingStrength}>Moderate shaking</Text>
            <Text style={styles.shakingIntensity}>Expected intensity</Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    alertContainer: {
      width: "100%",
      // borderWidth: 3,
      borderRadius: 5,
      // position: 'absolute',
      backgroundColor: '#fff',
      zIndex: 3,
      position: 'absolute',
      top: "20%",
      
    },
    alertHeaderContainer: {
      borderBottomWidth: 2,
      borderBottomColor: "#d2cfcf",
      paddingVertical: 10,
      flexDirection: "row",
    },
    alertHeaderText: {
      fontSize: 15,
      color: "#d2cfcf",
      marginLeft: 10
    },
    alertExitIcon: {
      position: 'absolute',
      right: 10,
      top: 10
    },
    alertEmergencyIcon: {
      marginLeft: 10
    },
    alertDescriptionContainer: {
  
    },
    alertBody: {
      padding: 15
    },
    alertDescriptionText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 15
    },
    earthquakeTime: {
      color: "#000",
      fontSize: 15
    },
    alertStats: {
      marginTop: 25
    },
    shakingStrength: {
      width: "37%",
      backgroundColor: '#ffecc8',
      textAlign: "center",
      color: "#a37f40",
      fontWeight: "bold"
    },
    shakingIntensity: {
      color: "#d2cfcf",
      fontWeight: "bold"
    },
  });