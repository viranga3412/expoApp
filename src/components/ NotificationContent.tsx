import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MessageIcon from '../../assets/message.svg';
import { styles } from '../styles/notificationStyles';
import { APP_NAME } from '../constants/appConstants';

const NotificationContent: React.FC = () => {
  return (
    <View style={styles.content}>
      <MessageIcon />
      <View style={styles.headerText}>
        <Text style={styles.title}>Get the most out of {APP_NAME}</Text>
        <FontAwesome name="check-square" size={20} color="green" style={styles.checkmark} />
      </View>
      <Text style={styles.subtitle}>
        Allow notifications to stay in the loop with your payments, requests, and groups.
      </Text>
    </View>
  );
};

export default NotificationContent;
