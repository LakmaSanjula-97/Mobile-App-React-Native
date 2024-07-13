import { Button, View, TextInput, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AppStyles from "../styles/AppStyles";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function ManageAccount({ navigation }) {
  const [currentUser, setcurrentUser] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentEmail(user.email);
      } else {
        setCurrentEmail("");
        navigation.navigate("SignInScreen");
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setCurrentEmail("");
        navigation.navigate("SignInScreen");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <View style={AppStyles.accountContainer}>
      <View style={AppStyles.backgroundCover}>
        <Text style={AppStyles.manageAccountHeader}>My App</Text>
        <TextInput
          style={AppStyles.textInput}
          placeholder="Email"
          value={currentEmail}
          editable={false}
        />
        <TextInput
          style={AppStyles.textInput}
          placeholderTextColor="white"
          placeholder="Example123"
          value={currentUser}
          editable={false}
        />

        <TouchableOpacity style={AppStyles.logOutButton} onPress={logout}>
          <Text style={AppStyles.signInButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
