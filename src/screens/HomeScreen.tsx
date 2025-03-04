import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getUserData, saveUserData } from "../utils/storage";
import { COLORS } from "../constants/colors";
import { HomeScreenProps, UserData } from "../types/home";
import styles from "../styles/homeStyles";
import Forward from '../../assets/Forward.svg'


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [userData, setUserData] = useState<UserData>({ firstName: "", lastName: "" });

  useEffect(() => {
    const loadUserData = async () => {
      const data = await getUserData();
      if (data) setUserData(data);
    };
    loadUserData();
  }, []);

  const handleNext = async () => {
    await saveUserData(userData);
    navigation.navigate("Notification");
  };

  const isButtonEnabled = userData.firstName.trim() && userData.lastName.trim();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your legal name</Text>
      <Text style={styles.subtitle}>We need some details to create your account.</Text>

      <TextInput
        style={styles.input}
        placeholder="First name"
        placeholderTextColor={COLORS.placeholder}
        value={userData.firstName}
        onChangeText={(text) => setUserData({ ...userData, firstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        placeholderTextColor={COLORS.placeholder}
        value={userData.lastName}
        onChangeText={(text) => setUserData({ ...userData, lastName: text })}
      />

      <TouchableOpacity
        style={[styles.button, { opacity: isButtonEnabled ? 1 : 0.5 }]}
        onPress={handleNext}
        disabled={!isButtonEnabled}
      >
       <Forward />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
