import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "../../components/Themed";

interface IOnboarding {}

const Onboarding: React.FC<IOnboarding> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className=''>Onboarding</Text>
      <StatusBar style='auto' />
    </View>
  );
};
export default Onboarding;
