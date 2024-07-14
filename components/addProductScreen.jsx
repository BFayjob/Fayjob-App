import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AddProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [kilogramQuantity, setKilogramQuantity] = useState('');
  const [kilogramPerBag, setKilogramPerBag] = useState('');
  const [bagQuantity, setBagQuantity] = useState('');
  const [kilogramSellingPrice, setKilogramSellingPrice] = useState('');
  const [bagSellingPrice, setBagSellingPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsVisible(true);
  };

  const handleClosePopup = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.ProductContainer}>
      <TouchableOpacity onPress={handleOpenPopup} style={styles.button}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>

      <Modal visible={isVisible} onRequestClose={handleClosePopup}>
        <View style={styles.popupContainer}>
          <Text style={styles.title}>New product</Text>
          {/* Add your desired content for the pop-up */}
          <TouchableOpacity onPress={handleClosePopup} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View className="mt-4">
            {/* Product name */}
            <TextInput
              placeholder="Product name"
              value={productName}
              onChangeText={setProductName}
              className="mb-2 rounded-md border p-2"
            />
            {/* Product category dropdown */}
            {/* ... */}
            <Text className="mt-2 text-lg">Add Products with Quantity</Text>
            <View className="flex-row space-x-4">
              <View className="flex-1">
                <Text>Kilograms</Text>
                <TextInput
                  placeholder="Kilograms"
                  value={kilogramQuantity}
                  onChangeText={setKilogramQuantity}
                  className="mb-2 rounded-md border p-2"
                  keyboardType="numeric"
                />
              </View>
              <View className="flex-1">
                <Text>Kilograms per Bag</Text>
                <TextInput
                  placeholder="Kilograms per Bag"
                  value={kilogramPerBag}
                  onChangeText={setKilogramPerBag}
                  className="mb-2 rounded-md border p-2"
                  keyboardType="numeric"
                />
              </View>
              <View className="flex-1">
                <Text>Bag Quantity</Text>
                <TextInput
                  placeholder="Bag Quantity"
                  value={bagQuantity}
                  onChangeText={setBagQuantity}
                  className="mb-2 rounded-md border p-2"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <Text className="mt-2 text-lg">Pricing</Text>
            <View className="flex-row space-x-4">
              <View className="flex-1">
                <Text>Kilogram Selling Price</Text>
                <TextInput
                  placeholder="Kilogram Selling Price"
                  value={kilogramSellingPrice}
                  onChangeText={setKilogramSellingPrice}
                  className="mb-2 rounded-md border p-2"
                  keyboardType="numeric"
                />
              </View>
              <View className="flex-1">
                <Text>Bag Selling Price</Text>
                <TextInput
                  placeholder="Bag Selling Price"
                  value={bagSellingPrice}
                  onChangeText={setBagSellingPrice}
                  className="mb-2 rounded-md border p-2"
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  ProductContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
  },
  button: {
    backgroundColor: 'Blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    bottom: '1rem',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  popupContainer: {
    backgroundColor: 'grey',
    justifyContent: 'flex-start', // Align content to the top
    padding: 20,
    flex: 1,
    borderRadius: 5,
    top: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'start',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default AddProductScreen;
