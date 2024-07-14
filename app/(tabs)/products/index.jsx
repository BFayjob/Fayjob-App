import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'nativewind';
import AddProductScreen from '../../../components/addProductScreen';

const ProductScreen = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [selectedTab, setSelectedTab] = useState('products');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const products = [
    {
      id: 1,
      name: 'Ace 3mm',
      destination: 'Lagos',
      quantity: '0kg/300 bags',
      kgPrice: 'NO',
      bagPrice: 'N12000',
      selected: false,
    },
    // ... other products
  ];

  const handleProductSelect = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, selected: !product.selected };
      }
      return product;
    });
    setSelectedProducts(updatedProducts);
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductSelect(item.id)}>
      <View>
        <Text>{item.name}</Text>
        <Text>Destination: {item.destination}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <View>
          <Text>Kg price: {item.kgPrice}</Text>
          <Text>Bag Price: {item.bagPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between p-4">
        <Text className="text-2xl font-bold">GHM</Text>
        <Text className="text-2xl font-bold">Products</Text>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => handleTabPress('products')}
          style={[styles.tabButton, selectedTab === 'products' && styles.activeTab]}>
          <Text style={[styles.tabText, selectedTab === 'products' && styles.activeTabText]}>
            Products
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('productTransfer')}
          style={[styles.tabButton, selectedTab === 'productTransfer' && styles.activeTab]}>
          <Text style={[styles.tabText, selectedTab === 'productTransfer' && styles.activeTabText]}>
            Product Transfer
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'products' && (
        <View style={styles.productList}>{/* Your product list */}</View>
      )}
      {selectedTab === 'productTransfer' && (
        <View style={styles.productTransferList}>{/* Your product transfer list */}</View>
      )}

      <View className="flex-1">
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
        <AddProductScreen className=" bottom- 4 absolute right-4 rounded-full bg-blue-500 p-4" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... your existing styles
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabButton: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  productList: {
    flex: 1,
  },
  productTransferList: {
    flex: 1,
  },
});
export default ProductScreen;
