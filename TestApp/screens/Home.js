import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import AppStyles from "../styles/AppStyles";
import axios from "axios";

const settingsIcon = require("../assets/settings.png");

export default function Home({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        "https://thronesapi.com/api/v2/Characters"
      );
      setCharacters(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#258ea6" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.settingIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ManageAccount")}>
          <Image source={settingsIcon} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.homeHeader}>Game of Thrones</Text>
      <Text style={styles.homeSubHeader}>Character List</Text>

      <View style={styles.homeContainer}>
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CharacterDetail", { character: item })
              }
            >
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.fullName}</Text>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.itemImage}
                />
              </View>
            </TouchableOpacity>
          )}
        />
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
  homeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#252525",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  itemText: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  homeHeader: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFD17A",
    alignSelf: "center",
    paddingBottom: 5,
  },
  homeSubHeader: {
    fontSize: 15,
    color: "#FFD17A",
    alignSelf: "center",
  },
  settingIconContainer: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    alignSelf: "stretch",
    marginVertical: 4,
  },
  settingsIcon: {
    color: "#fff",
    width: 25,
    height: 25,
  },
});
