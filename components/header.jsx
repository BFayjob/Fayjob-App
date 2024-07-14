import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const locations = [
    { label: 'Abuja', value: 'Abuja' },
    { label: 'Lagos', value: 'Lagos' },
    { label: 'Port Harcourt', value: 'Port Harcourt' },
    // Add more locations as needed
  ];

  return (
    <View className="flex-col justify-center  bg-blue-300">
      <View className="flex-row items-center">
        <MaterialCommunityIcons name="map-marker-outline" size={28} color={'black'} />
        <Picker
          selectedValue={selectedLocation}
          onValueChange={(itemValue) => setSelectedLocation(itemValue)}
          items={locations}
          style={{ width: 150 }} // Adjust width as needed
        />
      </View>
      <Text className="mt-2 text-xl font-bold">Good morning, Boluwatife</Text>
      <View className="flex-row items-center justify-between">
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
