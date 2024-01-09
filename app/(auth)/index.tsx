import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient, Text, View } from "../../components/Themed";
import { Image } from "expo-image";
import { Pressable } from "react-native";

interface Iindex {}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const index: React.FC<Iindex> = ({}) => {
  return (
    <View className='h-full w-full relative'>
      <Image
        source={require("../../assets/images/landing.jpg")}
        placeholder={blurhash}
        contentFit='cover'
        transition={1000}
        className='w-full h-[74%] scale-110 ml-5 relative object-center'
      />
      <LinearGradient className='flex absolute top-0 py-12 inset-0 h-full w-full items-center justify-end'>
        <View className='flex bg-transparent flex-col items-center justify-between gap-3'>
          <View className='bg-transparent flex-col items-center justify-center'>
            <Text className='text-4xl font-bold text-center w-60 text-white'>
              A healthy life,
            </Text>
            <Text className='text-4xl font-bold text-center w-48 text-white'>
              with
            </Text>
            <Text className='text-4xl font-bold text-center w-60 text-white'>
              good taste.
            </Text>
          </View>
          <View className='bg-transparent flex-col items-center justify-center'>
            <Text className='text-sm text-gray-200 mt-2'>
              The best grain, the finest roast, the powerful flavor.
            </Text>
            <Text className='text-sm text-gray-200'>
              All in one simple cup.
            </Text>
          </View>
          <Pressable className='bg-[#66C64E] h-[50px] w-[315px] rounded-xl'>
            <Text className='text-white text-xl font-bold m-auto'>
              Get Started
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
      <StatusBar style='light' />
    </View>
  );
};
export default index;
