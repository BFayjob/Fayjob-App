import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, Alert } from 'react-native';

// ... (rest of your imports)

const AddLocationPopup = ({ visible, onClose, onAddLocation }) => {
  const [newLocation, setNewLocation] = useState('');

  const handleAdd = () => {
    onAddLocation(newLocation);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable style={{ flex: 1 }} onPress={onClose}>
        <View style={{ backgroundColor: 'white', margin: 20, borderRadius: 10 }}>
          <TextInput
            placeholder="Enter new location"
            value={newLocation}
            onChangeText={setNewLocation}
            style={{ padding: 10 }}
          />
          <Pressable
            style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            onPress={handleAdd}>
            <Text style={{ color: 'white' }}>Add Location</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default AddLocationPopup;
