import { Stack } from 'expo-router';

export default function ProductLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'products ', headerShown: false }} />;
    </Stack>
  );
}
