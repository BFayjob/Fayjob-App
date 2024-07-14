import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BusinessSales from '../../../components/BusinessSales';
import QuickActions from '../../../components/quickActions';
import Transactions from '../../../components/transactions';

const HomeScreen = () => {
  return (
    <SafeAreaView className="mt-6 flex-1 bg-white p-4">
      <View className="flex-col justify-center  bg-blue-100">
        <TouchableOpacity>
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="map-marker-outline" size={28} color={'black'} />
            <Text className="ml-4 "> Lagos Store</Text>
          </View>
        </TouchableOpacity>

        <Text className="mt-2 text-xl font-bold">Good morning, User</Text>
        <View className="flex-row items-center justify-between"></View>
      </View>
      <BusinessSales />
      <QuickActions />
      <Transactions />
    </SafeAreaView>
  );
};

export default HomeScreen;
