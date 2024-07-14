import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, TextInput, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationPopup from './locationPopup';
import AddLocationPopup from './addLocationPopup';
import ConfirmPopup from './confirmPopup';

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState('Lagos Store');
  const [isLocationPopupVisible, setIsLocationPopupVisible] = useState(false);
  const [isAddLocationPopupVisible, setIsAddLocationPopupVisible] = useState(false);
  const [isConfirmPopupVisible, setIsConfirmPopupVisible] = useState(false);
  const [newLocation, setNewLocation] = useState('');
  const [locations, setLocations] = useState([
    { label: 'Abuja', value: 'Abuja' },
    { label: 'Lagos', value: 'Lagos' },
    { label: 'Port Harcourt', value: 'Port Harcourt' },
  ]);

  const handleLocationPress = () => {
    setIsLocationPopupVisible(true);
  };

  const handleAddLocation = (newLocation) => {
    // Add new location to the locations list
    setLocations([...locations, { label: newLocation, value: newLocation }]);
    // Set the newly added location as the selected location
    setSelectedLocation(newLocation);
  };

  const handleConfirmAddLocation = () => {
    // Logic to add new location to your data source
    setIsConfirmPopupVisible(false);
    setIsAddLocationPopupVisible(false);
  };

  return (
    <View className="flex-col items-center">
      <TouchableOpacity onPress={handleLocationPress}>
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="map-marker-outline" size={28} color={'black'} />
          <Text className="ml-4">{selectedLocation}</Text>
        </View>
      </TouchableOpacity>
      {/* ... rest of your header content */}
      <LocationPopup
        visible={isLocationPopupVisible}
        onClose={() => setIsLocationPopupVisible(false)}
        onLocationSelect={(location) => setSelectedLocation(location)}
      />
      <AddLocationPopup
        visible={isAddLocationPopupVisible}
        onClose={() => setIsAddLocationPopupVisible(false)}
        onAdd={handleAddLocation}
        newLocation={newLocation}
        setNewLocation={setNewLocation}
      />
      <ConfirmPopup
        visible={isConfirmPopupVisible}
        onClose={() => setIsConfirmPopupVisible(false)}
        onConfirm={handleConfirmAddLocation}
      />
    </View>
  );
};

export default Header;
