import { Text, Pressable } from "react-native";
import AppStyles from "../styles/AppStyles";

export default function RegisterButton(props) {
  return (
    <Pressable onPress={props.onPress}>
      {({ pressed }) => (
        <Text
          style={
            pressed
              ? AppStyles.pressedSignUpButton
              : AppStyles.signUpButton
          }
        >
          {props.text}
        </Text>
      )}
    </Pressable>
  );
}
