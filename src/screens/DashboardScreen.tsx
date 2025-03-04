import React, { useEffect, useState } from "react";
import { 
  View, Text, FlatList, Image, StatusBar, ActivityIndicator, 
  TouchableOpacity,
  Alert
} from "react-native";
import { Pressable, Linking } from "react-native";
import { fetchNews } from "../services/newsService";
import { getUserData } from "../utils/storage";
import styles from "../styles/DashboardStyles";
import { NewsItem } from '../types/news';
import { UserData } from "../types/user";

const DashboardScreen: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [firstName, setFirstName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError(false);
      const newsData: NewsItem[] = await fetchNews();
      setNews(newsData);
      const userData: UserData | null = await getUserData();
      if (userData?.firstName) {
        setFirstName(userData.firstName);
      }
    } catch (error) {
     // console.error("Error loading dashboard data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };



  const renderItem = ({ item }: { item: NewsItem }) => {
    const handlePress = async (url: string) => {
        if (!url) {
          Alert.alert("Error", "No valid URL available.");
          return;
        }
      
        const validUrl = url.startsWith("http") ? url : `https://${url}`;
        const supported = await Linking.canOpenURL(validUrl);
      
        if (supported) {
          await Linking.openURL(validUrl);
        } else {
          Alert.alert("Error", "Cannot open this URL.");
        }
      };
      
  
    return (
      <TouchableOpacity onPress={() =>handlePress(item.url)} style={styles.articleContainer}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.articleImage} />
        ) : (
          <View style={styles.placeholderImage} />
        )}
        <View style={styles.articleText}>
          <Text style={styles.source}>
            {item.source} • {new Date(item.datetime * 1000).toDateString()}
          </Text>
          <Text style={styles.title}>{item.headline}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Hey {firstName }</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Something went wrong. Please try again later.</Text>
        </View>
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default DashboardScreen;
