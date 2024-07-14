import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          tabBarShowLabel: false,
          headerShown: false,

          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="sales"
        options={{
          title: 'sales',
          tabBarShowLabel: false,
          headerShown: false,

          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'products',
          tabBarShowLabel: false,
          headerShown: false,

          tabBarIcon: ({ color }) => <Ionicons name="gift" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'settings',
          tabBarShowLabel: false,
          headerShown: false,

          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
