import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

import BackButton from '../components/BackButton';
import { NotificationScreenProps } from '../types/notification';
import NotificationContent from '../components/ NotificationContent';
import { styles } from '../styles/notificationStyles';
import NotificationModal from '../components/ NotificationModal';

const NotificationScreen: React.FC<NotificationScreenProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [permissionStatus, setPermissionStatus] = useState<Notifications.PermissionStatus | null>(null);

  useEffect(() => {
    const checkPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      setPermissionStatus(status);
    };
    checkPermissions();
  }, []);

  const handleAllowNotifications = async () => {
    if (permissionStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      setPermissionStatus(status);
      if (status === 'granted') {
        navigation.navigate('Dashboard');
      }
    } else {
      navigation.navigate('Dashboard');
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <NotificationContent />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <NotificationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAllow={handleAllowNotifications}
      />
    </View>
  );
};

export default NotificationScreen;
