import React, { useEffect, useCallback } from "react";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SmallSplashIcon from "../../assets/Logo.svg";
import { styles } from "../styles/SplashStyles";

const SplashScreen = ({ navigation }: { navigation: any }) => {
  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        navigation.replace("Home");
      }, 3000); 

      return () => clearTimeout(timer);
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <SmallSplashIcon width={200} height={200} />
    </View>
  );
};

export default SplashScreen;
