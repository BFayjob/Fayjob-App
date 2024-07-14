import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  Modal,
  Pressable,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LocationPopup = ({ visible, onClose, onLocationSelect }) => {
  const [locations, setLocations] = useState([
    { label: 'Abuja', value: 'Abuja' },
    { label: 'Lagos', value: 'Lagos' },
    { label: 'Port Harcourt', value: 'Port Harcourt' },
  ]);
  const [searchText, setSearchText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownHeight = useRef(new Animated.Value(0)).current;

  const filteredLocations = locations.filter((location) =>
    location.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    onLocationSelect(location);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    Animated.timing(dropdownHeight, {
      toValue: isDropdownOpen ? 0 : 200, // Adjust dropdown height as needed
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable className="flex-1 items-center justify-center bg-black/50" onPress={onClose}>
        <SafeAreaView className="rounded-lg bg-green-200 p-4">
          <TouchableOpacity onPress={toggleDropdown} className="flex-row items-center">
            <MaterialCommunityIcons name="map-marker-outline" size={28} color={'black'} />
            <TextInput
              placeholder="Search location"
              value={searchText}
              onChangeText={setSearchText}
              className="mb-4 rounded-md border p-2 text-black"
            />
            <FlatList
              data={filteredLocations}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => handleLocationSelect(item)}
                  className="flex-row items-center justify-between border-b py-2">
                  <Text
                    className={`flex-1 ${item.value === selectedLocation ? 'font-bold' : ''} text-black`}>
                    {item.label}
                  </Text>
                  {item.value === selectedLocation && (
                    <MaterialCommunityIcons name="check" size={20} color="green" />
                  )}
                </Pressable>
              )}
              keyExtractor={(item) => item.value}
            />
          </TouchableOpacity>
          <Pressable className="mt-4 rounded-md bg-blue-500 py-2 text-white">
            <Text>Add Shop</Text>
          </Pressable>
        </SafeAreaView>
      </Pressable>
    </Modal>
  );
};

export default LocationPopup;
