/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import { AntDesign } from "@expo/vector-icons";
import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  ScrollView as DefaultScrollView,
  TextInput as RNTextInput,
  Pressable,
} from "react-native";
import { LinearGradient as DefaultLinearGradient } from "expo-linear-gradient";

import Colors from "../constants/Colors";
import { router } from "expo-router";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

// gradient
export function LinearGradient(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const theme = useColorScheme() ?? "light";

  const color =
    theme === "light"
      ? ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 0)", "rgba(239, 239, 239, 1)"]
      : ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5721)", "rgba(0, 0, 0, 1)"];

  return (
    <DefaultLinearGradient
      colors={color}
      locations={[0.0732, 0.5518, 0.7445]}
      style={[style]}
      {...otherProps}
    />
  );
}

//Back button

export function BackButton() {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      onPress={() => router.canGoBack() && router.back()}
      className='flex items-center justify-center h-10 w-20 pr-1 bg-white dark:bg-transparent'
    >
      <AntDesign
        name='left'
        size={24}
        color={theme === "light" ? "black" : "white"}
      />
    </Pressable>
  );
}

// text input

export function TextInput({
  id,
  disabled,
  label,
  password,
  ...props
}: {
  id?: string;
  disabled?: boolean;
  type?: string;
  label?: string;
  formatPrice?: boolean;
  required?: boolean;
  password?: boolean;
}) {
  return (
    <View className='w-full relative'>
      <RNTextInput
        id={id}
        editable={!disabled}
        secureTextEntry={password}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
  
        `}
        {...props}
      />
      <Text
        className={` absolute text-md duration-150 transform -translate-y-3 top-5 z-10  origin-[0] left-4
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 `}
      >
        {label}
      </Text>
    </View>
  );
}
