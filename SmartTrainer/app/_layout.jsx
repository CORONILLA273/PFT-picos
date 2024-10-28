import { Stack } from "expo-router";
import { useFonts} from "expo-font"

export default function RootLayout() {

  useFonts({
    'firasans': require('./../assets/fonts/FiraSans-Regular.ttf'),
    'firasans-medium': require('./../assets/fonts/FiraSans-Medium.ttf'),
    'firasans-bold': require('./../assets/fonts/FiraSans-Bold.ttf'),

  })
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index"
      options={{
        headerShown: false
      }}
      />
    </Stack>
  );
}
