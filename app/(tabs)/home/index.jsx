import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BusinessSales from '../../../components/BusinessSales';
import QuickActions from '../../../components/quickActions';
import Transactions from '../../../components/transactions';
import Header from '../../../components/header';

const HomeScreen = () => {
  return (
    <SafeAreaView className="mt-6 flex-1 bg-white p-4">
      <Header />
      <View className="flex-col justify-center  bg-blue-100">
        <View className="flex-row items-center justify-between">
          <Text className="mt-2 items-center text-xl font-bold">Good morning, Boluwatife</Text>
        </View>
      </View>
      <BusinessSales />
      <QuickActions />
      <Transactions />
    </SafeAreaView>
  );
};

export default HomeScreen;
