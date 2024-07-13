import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import AppStyles from "../styles/AppStyles";
import RegisterButton from "../components/RegisterButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function SignUpScreen({ navigation }) {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [validationMessage, setValidationMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordCriteria = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
  };

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("");
    }
    setValue(value);
  };

  let signUp = () => {
    if (
      password === confirmPassword &&
      Object.values(passwordCriteria).every(Boolean)
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Save additional user data to Firestore
          return setDoc(doc(db, "users", user.uid), {
            userName: userName,
            email: email,
          });
        })
        .then(() => {
          navigation.navigate("Home", { user: auth.currentUser });
        })
        .catch((error) => {
          setValidationMessage(error.message);
        });
    } else {
      setValidationMessage(
        "Please ensure all password criteria are met and passwords match."
      );
    }
  };

  return (
    <View style={AppStyles.signUpContainer}>
      <View style={AppStyles.backgroundCover}>
        <Text style={AppStyles.signUpappHeader}>My App</Text>

        <TextInput
          style={AppStyles.textInput}
          placeholder="Name"
          placeholderTextColor="#fff"
          value={userName}
          onChangeText={setUserName}
        />

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
            onChangeText={(value) =>
              validateAndSet(value, confirmPassword, setPassword)
            }
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <View style={AppStyles.passwordContainer}>
          <TextInput
            style={AppStyles.passwordInput}
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={(value) =>
              validateAndSet(value, password, setConfirmPassword)
            }
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Icon
              name={showConfirmPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <View style={AppStyles.passwordCriteriaContainer}>
          <View style={AppStyles.passwordCriteriaColumn}>
            <Text
              style={
                passwordCriteria.lowercase
                  ? AppStyles.criteriaMet
                  : AppStyles.criteriaNotMet
              }
            >
              {passwordCriteria.lowercase ? "✓" : "✗"} One lowercase character
            </Text>
            <Text
              style={
                passwordCriteria.uppercase
                  ? AppStyles.criteriaMet
                  : AppStyles.criteriaNotMet
              }
            >
              {passwordCriteria.uppercase ? "✓" : "✗"} One uppercase character
            </Text>
          </View>
          <View style={AppStyles.passwordCriteriaColumn}>
            <Text
              style={
                passwordCriteria.number
                  ? AppStyles.criteriaMet
                  : AppStyles.criteriaNotMet
              }
            >
              {passwordCriteria.number ? "✓" : "✗"} One number
            </Text>
            <Text
              style={
                passwordCriteria.length
                  ? AppStyles.criteriaMet
                  : AppStyles.criteriaNotMet
              }
            >
              {passwordCriteria.length ? "✓" : "✗"} 8 characters minimum
            </Text>
          </View>
        </View>

        <Text style={[AppStyles.errorText]}>{validationMessage}</Text>

        <TouchableOpacity style={AppStyles.signInButton} onPress={signUp}>
          <Text style={AppStyles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={AppStyles.signUprowContainer}>
          <Text style={AppStyles.lightText}>Already have an account?</Text>
          <RegisterButton
            text="Sign In"
            onPress={() => navigation.navigate("SignInScreen")}
          />
        </View>
      </View>
    </View>
  );
}
