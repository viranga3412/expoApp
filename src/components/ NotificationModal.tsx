import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from '../styles/notificationStyles';
import { APP_NAME } from '../constants/appConstants';

interface NotificationModalProps {
  visible: boolean;
  onClose: () => void;
  onAllow: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ visible, onClose, onAllow }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>"{APP_NAME}" Would Like to Send You Notifications</Text>
          <Text style={styles.modalMessage}>
            Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Don't Allow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.allowButton} onPress={onAllow}>
              <Text style={styles.allowButtonText}>Allow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModal;
