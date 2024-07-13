import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppStyles from "../styles/AppStyles";

export default function CharacterDetail({ route }) {
  const navigation = useNavigation();
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.characterContainer}>
        <Text style={styles.screenHeader}>{character.fullName}</Text>
        <View style={styles.screenImage}>
          <Image source={{ uri: character.imageUrl }} style={styles.image} />
        </View>
        <Text style={styles.details}>ID: {character.id}</Text>
        <Text style={styles.details}>First Name: {character.firstName}</Text>
        <Text style={styles.details}>Last Name: {character.lastName}</Text>
        <Text style={styles.details}>Full Name: {character.fullName}</Text>
        <Text style={styles.details}>Title: {character.title}</Text>
        <Text style={styles.details}>Family: {character.family}</Text>
        <Text style={styles.details}>Image: {character.image}</Text>
        <Text style={styles.details}>Image URL: {character.imageUrl}</Text>

        <TouchableOpacity
          style={AppStyles.viewInButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={AppStyles.signInButtonText}>View All Characters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#252525",
  },
  characterContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#252525",
  },
  screenHeader: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFD17A",
    alignSelf: "center",
    padding: 20,
  },
  screenImage: {
    alignSelf: "center",
  },
  details: {
    fontSize: 15,
    color: "#fff",
    padding: 5,
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
