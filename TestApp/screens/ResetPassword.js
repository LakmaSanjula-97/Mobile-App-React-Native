import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import AppStyles from '../styles/AppStyles';
import React from 'react';
import RegisterButton from '../components/RegisterButton';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword( { navigation }) {
  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <View style={AppStyles.resetPasswordContainer}>
      <View style={AppStyles.backgroundCover}>
        <Text style={AppStyles.resetPwHeader}>My App</Text>

        <Text style={AppStyles.resetPwSubHeader}>Reset password</Text>

        <Text style={AppStyles.errorText}>{errorMessage}</Text>

        <TextInput
          style={AppStyles.textInput}
          placeholder="Email"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={setEmail}
        />
        <View style={AppStyles.resetPwButtoncontainer}>
          <TouchableOpacity
            style={AppStyles.resetPwButton}
            onPress={resetPassword}
          >
            <Text style={AppStyles.resetPwButtonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>

        {/* <Button
          title="Reset Password"
          color="#f7b267"
          onPress={resetPassword}
        /> */}

        <View style={AppStyles.resetPwrowContainer}>
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
