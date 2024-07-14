import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const BusinessSales = ({ businessName, totalSales }) => {
  return (
    <View className="rounded-lg bg-blue-200 p-4 shadow-md">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-bold">Business Sales</Text>
        {/* Replace with your dropdown component */}
        <Text>Dropdown</Text>
      </View>
      <Text className="mt-4 text-2xl font-bold">₦ 234567</Text>
      <View className="mt-4 flex-row justify-between">
        <TouchableOpacity className="rounded-md bg-blue-500 px-4 py-2 text-white">
          <Text>Add Product</Text>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-md bg-green-500 px-4 py-2 text-white">
          <Text>Record Sale</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BusinessSales;
