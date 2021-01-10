import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Component,
  ScrollView,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default function App() {
  <View style={styles.widgetBody}>
    <Text style={styles.paragraph}>
      Spend wisely. Should you be saving up for something instead?{" "}
    </Text>
  </View>;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#a8edcb",
    },
    heading: {
      fontWeight: "600",
      fontSize: 25,
      textAlign: "center",
    },
    paragraph: {
      marginBottom: 20,
      fontSize: 16,
      color: "black",
      lineHeight: 30,
      marginHorizontal: 10,
      textAlign: "left",
    },
    bigText: {
      fontSize: 20,
      marginBottom: 10,
      alignItems: "center",
    },
    habbit: {
      marginTop: 10,
      height: 100,
      width: 400,
      alignItems: "center",
    },
    dragon: {
      height: 175,
      width: 175,
      marginTop: 10,
    },
    buttomImage: {
      height: 60,
      width: 60,
      marginTop: 10,
    },
    horizontal: {
      flexDirection: "row",
    },
    userName: {
      fontSize: 25,
      fontWeight: "600",
    },
    Balance: {
      fontSize: 22,
      fontWeight: "600",
    },
    userInfo: {
      fontSize: 18,
      fontWeight: "300",
    },
    startInfo: {
      flex: 1,
      padding: 20,
    },
    buttonLeftImage: {
      width: 200,
      height: 200,
    },
    buttonRightImage: {
      width: 200,
      height: 200,
      marginRight: 0,
    },
    buttonBottomImage: {
      width: 200,
      height: 200,
      marginLeft: 0,
    },
    widgetTitle: {
      height: 72,
      width: 380,
      marginTop: 20,
      marginBottom: 3,
      padding: 20,
      backgroundColor: "#FFE694",
      flex: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginHorizontal: 10,
    },
    widgetBody: {
      height: 150,
      width: 380,
      padding: 20,
      backgroundColor: "#FFFFFF",
      flex: 1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonAddTask: {
      height: 800,
      width: 800,
      padding: 0,
    },
    widgetFinanceBody: {
      height: 220,
      width: 380,
      padding: 20,
      backgroundColor: "#FFFFFF",
      flex: 1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    scrollview: {
      backgroundColor: "pink",
      marginHorizontal: 20,
    },
    screen: {
      padding: 10,
    },
    title: {
      padding: 50,
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      width: 115,
      borderBottomWidth: 1,
      marginHorizontal: 10,
      textAlign: "center",
      fontSize: 20,
    },
    taskinput: {
      width: 115,
      borderBottomWidth: 1,
      marginHorizontal: 10,
      textAlign: "center",
      fontSize: 20,
      marginBottom: 11,
    },
    tasks: {
      fontSize: 16,
      fontWeight: "300",
      marginTop: 10,
      marginBottom: 7,
    },
    taskBox: {
      height: 220,
      width: 380,
      padding: 20,
      backgroundColor: "#FFFFFF",
      flex: 1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginBottom: 20,
      marginHorizontal: 10,
      alignItems: "center",
    },
    taskButton: {
      fontSize: 13,
      fontWeight: "300",
      marginHorizontal: 10,
    },

    centeredView: {
      flexDirection: "row",
      marginTop: 5,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5,
    },
    center: {
      alignItems: "center",
    },
    addTaskButton: {
      flex: 1,
      backgroundColor: "#C3E6FF",
      borderRadius: 20,
      height: 50,
      width: 50,
    },
    newCenter: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalBudgetView: {
      margin: 20,
      backgroundColor: "#E0BBE4",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    modalEarningView: {
      margin: 20,
      backgroundColor: "#C3E6FF",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    modalSpendingView: {
      margin: 20,
      backgroundColor: "#FFC7C7",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    modalTaskView: {
      margin: 20,
      backgroundColor: "#FFC7C7",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    openButton: {
      backgroundColor: "#FFE694",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginBottom: 30,
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      fontSize: 14,
      textAlign: "center",
    },

    closeStyle: {
      color: "black",
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
    },

    modalText: {
      marginBottom: 15,
      fontSize: 20,
      lineHeight: 30,
    },
  });
}
