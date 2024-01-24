import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style='auto' />
      <Stack initialRouteName='index'>
        <Stack.Screen
          name='index'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='onboarding'
          options={{
            title: "Onboarding",
          }}
        />
        <Stack.Screen
          name='register'
          options={{
            title: "Register",
          }}
        />
        <Stack.Screen
          name='login'
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
