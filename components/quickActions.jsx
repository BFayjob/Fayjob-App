import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or your preferred icon library

const QuickActions = () => {
  return (
    <View className="flex flex-col space-y-2">
      <Text className="text-lg font-bold">Quick Action</Text>
      <View className="flex flex-col">
        <TouchableOpacity className="flex flex-row items-center py-2">
          <View className="flex-1">
            <Text>Products/Services</Text>
            <Text className="text-gray-500">Add & Track inventory</Text>
          </View>
          <Icon name="arrow-forward-ios" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center py-2">
          <View className="flex-1">
            <Text>Sales</Text>
            <Text className="text-gray-500">Record Products sales</Text>
          </View>
          <Icon name="arrow-forward-ios" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center py-2">
          <View className="flex-1">
            <Text>Inflow & Expenses</Text>
            <Text className="text-gray-500">Record inflow & Expenses</Text>
          </View>
          <Icon name="arrow-forward-ios" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuickActions;
