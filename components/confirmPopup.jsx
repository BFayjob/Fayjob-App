import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

const ConfirmPopup = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable style={{ flex: 1 }} onPress={onClose}>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Are you sure you want to add this location?</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Pressable
              onPress={onClose}
              style={{ flex: 1, backgroundColor: 'gray', padding: 10, borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>No</Text>
            </Pressable>
            <Pressable
              onPress={onConfirm}
              style={{ flex: 1, backgroundColor: 'green', padding: 10, borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ConfirmPopup;
