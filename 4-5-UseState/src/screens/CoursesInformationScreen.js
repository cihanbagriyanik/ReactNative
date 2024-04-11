import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import Information from "../../components/Information";

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information
        title="Angular Egitimi"
        imageSource={require("../../assets/angular.jpg")}
        desc="Kapsamli Angular Egitimi"
      />
      <Information
        title="Bootstrap 5 Egitimi"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Kapsamli Bootstrap Egitimi"
      />
      <Information
        title="C Progralama Egitimi"
        imageSource={require("../../assets/c.png")}
        desc="Kapsamli C Progralama Egitimi"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
