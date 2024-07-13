import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import AppStyles from "../styles/AppStyles";
import React, { useState } from "react";
import RegisterButton from "../components/RegisterButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignInScreen({ navigation }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("Home", { user: userCredential.user });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Please enter an email and password.");
    }
  };

  return (
    <View style={AppStyles.signInContainer}>
      <View style={AppStyles.backgroundCover}>
        <Text style={AppStyles.signInappHeader}>My App</Text>

        <TextInput
          style={AppStyles.textInput}
          placeholder="Email"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={setEmail}
        />

        <View style={AppStyles.passwordContainer}>
          <TextInput
            style={AppStyles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <Text style={[AppStyles.errorText]}>{errorMessage}</Text>

        <View style={AppStyles.signInrowView}>
          <Text style={AppStyles.lightText}>Forgot Password?</Text>
          <RegisterButton
            text="Reset"
            onPress={() => navigation.navigate("ResetPassword")}
          />
        </View>

        <TouchableOpacity style={AppStyles.signInButton} onPress={login}>
          <Text style={AppStyles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={AppStyles.signInrowContainer}>
          <Text style={AppStyles.lightText}>Don't have an account?</Text>
          <RegisterButton
            text="Sign Up"
            onPress={() => navigation.navigate("SignUpScreen")}
          />
        </View>
      </View>
    </View>
  );
}
