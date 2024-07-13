import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundCover: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },

  rowView: {
    flexDirection: "row",
    alignItems: "right",
    justifyContent: "right",
    alignSelf: "stretch",
    marginVertical: 4,
  },

  errorText: {
    color: "red",
  },

  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },

  textInput: {
    height: 45,
    color: "#fff",
    width: 300,
    margin: 12,
    borderWidth: 0,
    borderBlockColor: "#2A2A2A",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#2A2A2A",
  },

  pressedSignUpButton: {
    color: "red",
    opacity: 0.6,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2A2A2A",
    borderRadius: 8,
    width: 300,
    margin: 12,
    paddingRight: 10,
  },

  passwordInput: {
    flex: 1,
    padding: 10,
    color: "#fff",
  },

  signInContainer: {
    flex: 1,
    backgroundColor: "#252525",
  },

  signInappHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    paddingTop: 150,
    paddingBottom: 100,
  },

  signInrowView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
    width: 330,
    marginVertical: 4,
    paddingBottom: 40,
  },

  signInrowContainer: {
    paddingTop: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },
  lightText: {
    color: "#fff",
  },

  signInButton: {
    height: 35,
    width: 300,
    borderWidth: 2,
    backgroundColor: "#FFD17A",
    borderBlockColor: "#FFD17A",
    borderRadius: 10,
  },

  signInButtonText: {
    color: "black",
    fontSize: 16,
    paddingTop: 4,
    textAlign: "center",
    fontWeight: "bold",
  },

  signUpButton: {
    color: "#FFD17A",
  },

  //

  signUpContainer: {
    flex: 1,
    backgroundColor: "#252525",
  },

  signUpappHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    paddingTop: 100,
    paddingBottom: 50,
  },

  passwordCriteriaContainer: {
    flexDirection: "row",
    //justifyContent: "space-between",
    width: 300,
    paddingTop: 10,
    marginBottom: 50,
  },

  passwordCriteriaColumn: {
    flex: 1,
    paddingLeft: 3,
  },

  criteriaMet: {
    color: "green",
    fontSize: 11,
    paddingBottom: 10,
  },

  criteriaNotMet: {
    color: "#fff",
    fontSize: 11,
    paddingBottom: 10,
  },

  // signUpButton: {
  //   height: 35,
  //   width: 300,
  //   borderWidth: 2,
  //   backgroundColor:"#FFD17A",
  //   borderBlockColor: "#FFD17A",
  //   borderRadius: 10,
  // },

  // signUpButtonText: {
  //   color: 'black',
  //   fontSize: 16,
  //   paddingTop:4,
  //   textAlign:"center",
  //   fontWeight: 'bold',
  // },

  signUprowContainer: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },

  //
  accountContainer: {
    flex: 1,
    backgroundColor: "#252525",
  },

  logOutButton: {
    height: 35,
    width: 300,
    borderWidth: 2,
    backgroundColor: "#FFD17A",
    borderBlockColor: "#FFD17A",
    borderRadius: 10,
    marginTop: 150,
  },
  manageAccountHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    paddingTop: 150,
    paddingBottom: 50,
  },

  //
  viewInButton: {
    height: 35,
    width: 300,
    borderWidth: 2,
    backgroundColor: "#FFD17A",
    borderBlockColor: "#FFD17A",
    borderRadius: 10,
    marginTop: 50,
  },
  //

  resetPasswordContainer: {
    flex: 1,
    backgroundColor: "#252525",
  },
  resetPwButton: {
    height: 35,
    width: 300,
    borderWidth: 2,
    backgroundColor: "#FFD17A",
    borderBlockColor: "#FFD17A",
    borderRadius: 10,
  },

  resetPwHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    paddingTop: 150,
    paddingBottom: 10,
  },

  resetPwSubHeader: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 100,
  },

  resetPwButtonText: {
    color: "black",
    fontSize: 16,
    paddingTop: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
  resetPwButtoncontainer: {
    paddingTop: 60,
  },
  resetPwrowContainer: {
    paddingTop: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },
});
