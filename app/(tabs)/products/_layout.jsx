import { Stack } from 'expo-router';
import AddProductScreen from '../../../components/addProductScreen';

export default function ProductLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'products ', headerShown: false }} />;
    </Stack>
  );
}
