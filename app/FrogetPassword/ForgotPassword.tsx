import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";
import NewPasswordScreen from "../NewPasswordScreen/NewPasswordScreen";
import { useForm, Controller } from "react-hook-form";


const { width } = Dimensions.get("window");

export default function ForgotPassword() {
  const [username, setUsername] = useState("");


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onConfirmPressed = () => {
    console.log("User Confirmation Successfully");
  };

  // const onSendPressed = () => {
  //   console.log("onResendPress");
  // };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Reset your Password</Text>

        <CustomInput
          placeholder="User name"
          value={username}
          setValue={setUsername}
        />

        <CustomButton
          text="Send"
          onPress={() => {
            router.push("/NewPasswordScreen/NewPasswordScreen");
          }}
        />

        <CustomButton
          text="Back to Sign in"
          onPress={() => {
            router.push("/login");
          }}
          type="TERTIARY"
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
    // marginVertical: 10,
    // marginHorizontal: 20,
  },

  text: {
    color: "gray",
    marginVertical: 10,
    marginHorizontal: 20, // Horizontal margin (left and right)
  },

  link: {
    color: "#FDB075",
  },
});
