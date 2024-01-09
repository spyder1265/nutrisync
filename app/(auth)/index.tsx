import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient, Text, View } from "../../components/Themed";
import { Image } from "expo-image";

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
      <LinearGradient className='flex absolute top-0 py-6 inset-0 h-full w-full items-center justify-end'>
        <Text className='text-lg font-bold text-white'>auth!</Text>
      </LinearGradient>
      <StatusBar style='light' />
    </View>
  );
};
export default index;
