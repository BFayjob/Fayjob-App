import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const TransactionItem = ({ transaction }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <View>
        <Text style={{ fontWeight: 'bold' }}>{transaction.product}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'gray' }}>{transaction.date}</Text>
          <Text style={{ color: 'gray', marginLeft: 5 }}>{transaction.time}</Text>
        </View>
      </View>
      <Text style={{ fontWeight: 'bold', color: 'green' }}>₦{transaction.amount}</Text>
    </View>
  );
};

const Transactions = () => {
  const transactionsData = [
    { id: 1, product: 'ace 6mm', date: '2024-07-14', time: '12:30 PM', amount: 10000 },
    { id: 2, product: 'ace 5mm', date: '2024-07-13', time: '09:45 AM', amount: 5000 },
    { id: 1, product: 'ace 6mm', date: '2024-07-14', time: '12:30 PM', amount: 10000 },
    { id: 2, product: 'ace 5mm', date: '2024-07-13', time: '09:45 AM', amount: 5000 },
    { id: 1, product: 'ace 6mm', date: '2024-07-14', time: '12:30 PM', amount: 10000 },
    { id: 2, product: 'ace 5mm', date: '2024-07-13', time: '09:45 AM', amount: 5000 },
    { id: 1, product: 'ace 6mm', date: '2024-07-14', time: '12:30 PM', amount: 10000 },
    { id: 2, product: 'ace 5mm', date: '2024-07-13', time: '09:45 AM', amount: 5000 },
    // Add more transactions as needed
  ];

  const [showMore, setShowMore] = useState(false);
  const displayedTransactions = showMore ? transactionsData : transactionsData.slice(0, 5);

  return (
    <View>
      <Text className="mb-2 text-lg font-bold">Transactions</Text>
      <FlatList
        data={displayedTransactions}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        keyExtractor={(item) => item.id}
        inverted // To display most recent at the top
      />
      {displayedTransactions.length < transactionsData.length && (
        <TouchableOpacity onPress={() => setShowMore(true)}>
          <Text className="flex-row items-center justify-center">See More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Transactions;
