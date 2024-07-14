import { Stack } from 'expo-router';

export default function SalesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Sales', headerShown: false }} />;
    </Stack>
  );
}
