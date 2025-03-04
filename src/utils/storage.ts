import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserData } from "../types/user";

export const getUserData = async (): Promise<UserData> => {
  try {
    const firstName = await AsyncStorage.getItem("firstName");
    const lastName = await AsyncStorage.getItem("lastName");
    return { firstName: firstName || "", lastName: lastName || "" };
  } catch (error) {
    console.error("Error loading user data:", error);
    return { firstName: "", lastName: "" };
  }
};

export const saveUserData = async (userData: UserData): Promise<void> => {
  try {
    await AsyncStorage.setItem("firstName", userData.firstName);
    await AsyncStorage.setItem("lastName", userData.lastName);
  } catch (error) {
    console.error("Error saving user data:", error);
  }
};