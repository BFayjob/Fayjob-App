import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'settings', headerShown: false }} />;
    </Stack>
  );
}
