import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient, Text, View } from "../../components/Themed";
import { Image } from "expo-image";
import { Pressable } from "react-native";
import { router } from "expo-router";

interface Iindex {}

const index: React.FC<Iindex> = ({}) => {
  return (
    <View className='h-full w-full relative'>
      <Image
        source={require("../../assets/images/landing.jpg")}
        contentFit='cover'
        className='w-full h-[74%] scale-110 ml-5 relative object-center'
      />
      <LinearGradient className='flex absolute top-0 py-12 inset-0 h-full w-full items-center justify-end'>
        <View className='flex bg-transparent flex-col items-center justify-between gap-3'>
          <View className='bg-transparent flex-col items-center justify-center'>
            <Text className='text-4xl font-bold text-center w-60 '>
              A healthy life,
            </Text>
            <Text className='text-4xl font-bold text-center w-48 '>with</Text>
            <Text className='text-4xl font-bold text-center w-60 '>
              good taste.
            </Text>
          </View>
          <View className='bg-transparent flex-col items-center justify-center'>
            <Text className='text-sm text-gray-700 dark:text-gray-200 mt-2'>
              The best grain, the finest roast, the powerful flavor.
            </Text>
            <Text className='text-sm text-gray-700 dark:text-gray-200'>
              All in one simple cup.
            </Text>
          </View>

          <View className='bg-transparent flex-col items-center justify-center'>
            <Pressable
              onPress={() => router.push("/(auth)/onboarding")}
              className='bg-[#66C64E] h-[50px] w-[315px] rounded-xl'
            >
              <Text className=' text-xl font-bold m-auto'>Get Started</Text>
            </Pressable>
            <Pressable
              className='bg-transparent rounded-full py-3 px-8 mt-3'
              onPress={() => router.push("/(auth)/login")}
            >
              <Text className='text-md '>Login</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
      <StatusBar style='light' />
    </View>
  );
};
export default index;
