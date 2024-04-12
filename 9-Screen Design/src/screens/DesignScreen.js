import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
        <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
        <View style={{ width: 150, height: 150, backgroundColor: "green" }} />
      </View> */}
      {/* /* -------------------------------------------------------------------------- */}
      {/* <View style={styles.mainView}> */}
      {/* <Text style={styles.mainTextOne}>1</Text> */}
      {/* <Text style={styles.mainTextTwo}>2</Text>
        <Text style={styles.mainTextThree}>3</Text> */}
      {/* </View> */}
      {/* /* -------------------------------------------------------------------------- */}

      <View style={{ width: "25%", height: "25%", backgroundColor: "red" }} />
      <View
        style={{
          width: "25%",
          height: "25%",
          backgroundColor: "blue",
          position: "absolute",
          right: 0,
        }}
      />
      <View
        style={{
          width: "25%",
          height: "25%",
          backgroundColor: "green",
          position: "absolute",
          bottom: 0,
        }}
      />
      <View
        style={{
          width: "25%",
          height: "25%",
          backgroundColor: "yellow",
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    // borderWidth: 1,
    // borderColor: "black",
    // margin: 20,
    // borderRadius: 20,
    // alignItems: "flex-start",
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // height: 400,
  },
  mainText: {
    // borderWidth: 1,
    // borderColor: "red",
    // margin: 10,
    // padding: 20,
    // borderRadius: 10,
    // marginHorizontal:30,
    // marginVertical:30,
    // paddingHorizontal: 20,
    // paddingVertical: 20,
  },

  mainTextOne: {
    // borderWidth: 1,
    // borderColor: "red",
    // margin: 10,
    // padding: 20,
    // borderRadius: 10,
    // position: "absolute",
    // bottom: 0,
    // left: 5,
    // right: 0,
    // top: 0,
    // flex:3
    // alignSelf: "flex-start",
  },

  //   mainTextTwo: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     margin: 10,
  //     padding: 20,
  //     borderRadius: 10,
  //     // flex:5
  //     alignSelf: "center",
  //     // top: 10,
  //     // left: 30,
  //     // bottom:10
  //     // right:20
  //   },

  //   mainTextThree: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     margin: 10,
  //     padding: 20,
  //     borderRadius: 10,
  //     // flex:2
  //     alignSelf: "flex-start",
  //   },
});
