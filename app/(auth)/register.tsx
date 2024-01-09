import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "../../components/Themed";

interface IRegister {}

const Register: React.FC<IRegister> = ({}) => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className=''>Register</Text>
      <StatusBar style='auto' />
    </View>
  );
};
export default Register;
