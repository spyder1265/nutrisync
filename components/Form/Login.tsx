// LoginForm.tsx
import React, { useState } from "react";
import { TextInput, Pressable, useColorScheme } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Text, View } from "../Themed";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { control, handleSubmit, setValue } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useColorScheme() ?? "light";

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    console.log("Form data submitted:", data);
    setTimeout(() => {
      router.push("/(tabs)");
    }, 5000);

    setIsLoading(false);
  };

  return (
    <View className='w-2/3 flex flex-col'>
      <Controller
        control={control}
        disabled={isLoading}
        render={({ field }) => (
          <TextInput
            placeholder='Enter your email'
            placeholderTextColor={theme === "light" ? "black" : "black"}
            blurOnSubmit
            className='
                border-2
                border-gray-300
                text-black
                dark:text-white
                rounded-md
                outline-none
                focus:border-[#66C64E]
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                p-3
                placeholder:text-black
                font-light
                bg-white
                w-full
                mb-4
                '
            onChangeText={(text) => setValue("email", text.toLowerCase())}
            value={field.value}
            keyboardType='email-address'
          />
        )}
        name='email'
        defaultValue=''
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            placeholder='********'
            placeholderTextColor={theme === "light" ? "black" : "black"}
            onChangeText={(text) => setValue("password", text.toLowerCase())}
            value={field.value}
            blurOnSubmit
            className='
                border-2
                border-gray-300
                rounded-md
                outline-none
                focus:border-[#66C64E]
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                p-3
                font-light
                bg-white
                w-full
                mb-4
                '
            secureTextEntry
          />
        )}
        name='password'
        defaultValue=''
      />

      <View className='mt-2 flex flex-col gap-2 items-end'>
        <Pressable className='items-self-end'>
          <Text className='dark:text-neutral-100 text-neutral-400 font-normal text-base'>
            forgot password ?
          </Text>
        </Pressable>

        <Pressable
          className='bg-[#66C64E] h-[50px] mx-auto w-full rounded-xl'
          onPress={handleSubmit(onSubmit)}
        >
          <Text className='m-auto font-bold text-lg'>Login</Text>
        </Pressable>

        <View
          className='
          flex flex-row
          justify-center
          items-center
          gap-2
          w-full
          pr-[80px]
          pl-[83px]
        '
        >
          <View className='h-[1px] bg-neutral-300 w-full'></View>
          <Text className='dark:text-neutral-100 text-neutral-400 font-normal text-base'>
            or
          </Text>
          <View className='h-[1px] bg-neutral-300 w-full'></View>
        </View>
        {/* continue with socials */}
        <View className='flex flex-row gap-2 w-full justify-around'>
          <Pressable className='bg-[#66C64E] h-[50px] w-[50px] flex items-center px-3 py-3 rounded-xl'>
            <FontAwesome
              name='apple'
              size={25}
              color={theme === "light" ? "black" : "white"}
            />
          </Pressable>
          <Pressable className='bg-[#66C64E] h-[50px] w-[50px] flex items-center px-3 py-3 rounded-xl'>
            <FontAwesome
              name='google'
              size={25}
              color={theme === "light" ? "black" : "white"}
            />
          </Pressable>
          <Pressable className='bg-[#66C64E] h-[50px] w-[50px] flex items-center px-3 py-3 rounded-xl'>
            <FontAwesome
              name='facebook'
              size={25}
              color={theme === "light" ? "black" : "white"}
            />
          </Pressable>
        </View>

        <View className='flex flex-col w-full mt-10 gap-2 items-center'>
          <Text className='dark:text-neutral-100 text-neutral-400 font-light text-sm'>
            By continuing you agree to our
          </Text>
          <Text className='dark:text-neutral-100 text-neutral-400 font-light text-sm'>
            Terms of Service and Privacy Policy
          </Text>

          <Text className='dark:text-neutral-100 text-neutral-400 font-light text-sm'>
            © 2021 All Rights Reserved
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
