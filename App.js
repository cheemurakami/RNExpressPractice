import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function App() {
  const [value, onChangeText] = React.useState("Useless Placeholder");

  const testServerCreate = () => {
    console.log("test");
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => testServerCreate()}
            >
              <Text style={styles.boxText}>create</Text>
            </TouchableOpacity>
            <View style={styles.box}>
              <Text style={styles.boxText}>show</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>delete</Text>
            </View>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#3B6CD4",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
  },
  boxText: {
    color: "white",
    textAlign: "center",
  },
  inputField: {
    height: 40, 
    borderColor: "gray", 
    borderWidth: 1,
    margin: 20
  },
});
